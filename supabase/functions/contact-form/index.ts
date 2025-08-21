import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  projectDetails: string;
  csrfToken?: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0] || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  // Basic HTML/script tag removal
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate name
  if (!data.name || data.name.length < 2 || data.name.length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }
  if (data.name && !/^[a-zA-Z\s'-]+$/.test(data.name)) {
    errors.push('Name contains invalid characters');
  }
  
  // Validate company
  if (!data.company || data.company.length < 2 || data.company.length > 100) {
    errors.push('Company must be between 2 and 100 characters');
  }
  
  // Validate email
  if (!data.email || !validateEmail(data.email) || data.email.length > 100) {
    errors.push('Please enter a valid email address');
  }
  
  // Validate project type
  const validProjectTypes = ['Commercial', 'TV Series', 'Feature Film', 'Documentary', 'Music Video', 'Other'];
  if (!data.projectType || !validProjectTypes.includes(data.projectType)) {
    errors.push('Please select a valid project type');
  }
  
  // Validate project details
  if (!data.projectDetails || data.projectDetails.length < 10 || data.projectDetails.length > 1000) {
    errors.push('Project details must be between 10 and 1000 characters');
  }
  
  return { isValid: errors.length === 0, errors };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Rate limiting
    const clientIP = getClientIP(req);
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const rawData = await req.json();
    
    // Sanitize all input fields
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(rawData.name || ''),
      company: sanitizeInput(rawData.company || ''),
      email: sanitizeInput(rawData.email || ''),
      projectType: sanitizeInput(rawData.projectType || ''),
      projectDetails: sanitizeInput(rawData.projectDetails || ''),
      csrfToken: rawData.csrfToken,
    };

    // Validate the data
    const validation = validateContactForm(sanitizedData);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed', 
          details: validation.errors 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Log the submission (in production, save to database or send email)
    console.log('Contact form submission:', {
      name: sanitizedData.name,
      company: sanitizedData.company,
      email: sanitizedData.email,
      projectType: sanitizedData.projectType,
      projectDetails: sanitizedData.projectDetails.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
      ip: clientIP,
    });

    // Send email notification using Resend
    try {
      // Initialize Resend inside the request handler to prevent startup crashes
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (!resendApiKey) {
        console.error("RESEND_API_KEY environment variable is not set");
        throw new Error("Resend API key is not configured");
      }
      
      console.log("Initializing Resend with API key...");
      const resend = new Resend(resendApiKey);
      
      const { data, error } = await resend.emails.send({
        from: "Agents & Scouts <onboarding@resend.dev>",
        to: ["hello@agentsandscouts.com"],
        subject: `New ${sanitizedData.projectType} Project Inquiry from ${sanitizedData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Form Submission</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Contact Form Submission</h2>
                
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${sanitizedData.name}</p>
                  <p><strong>Company:</strong> ${sanitizedData.company}</p>
                  <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #2563eb;">${sanitizedData.email}</a></p>
                  <p><strong>Project Type:</strong> ${sanitizedData.projectType}</p>
                </div>
                
                <div style="margin: 20px 0;">
                  <h3>Project Details:</h3>
                  <div style="background: white; border: 1px solid #e5e7eb; padding: 15px; border-radius: 4px;">
                    ${sanitizedData.projectDetails.replace(/\n/g, '<br>')}
                  </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                  <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
                  <p><strong>IP Address:</strong> ${clientIP}</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("Resend API error:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Tack för ditt meddelande! Vi hör av oss inom kort.' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      
      return new Response(
        JSON.stringify({ 
          error: 'Det gick inte att skicka meddelandet. Försök igen eller kontakta oss direkt på hello@agentsandscouts.com' 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Something went wrong. Please try again later.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});