import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

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