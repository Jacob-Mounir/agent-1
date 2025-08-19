import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contact-schema";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import DOMPurify from "dompurify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      projectType: "Commercial",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Sanitize data before sending
      const sanitizedData = {
        ...data,
        name: DOMPurify.sanitize(data.name),
        company: DOMPurify.sanitize(data.company),
        email: DOMPurify.sanitize(data.email),
        projectDetails: DOMPurify.sanitize(data.projectDetails),
      };

      const response = await fetch('https://ofunrwrfeqhbkowoosns.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: result.message,
      });
      
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-heading mb-6">
                Let's find your{" "}
                <span className="text-gradient">perfect location.</span>
              </h2>
              
              <p className="text-subheading text-muted-foreground mb-8 leading-relaxed">
                We respond quickly. Your production deserves a trusted partner.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">hello@agentsandscouts.se</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+46 7 000 000 81</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Locations</div>
                  <div className="font-medium">Stockholm • Gothenburg • Beyond</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                className="button-luxury group"
                onClick={() => window.open('mailto:hello@agentsandscouts.com', '_blank')}
              >
                Book Intro Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="button-ghost"
                onClick={() => window.open('mailto:hello@agentsandscouts.com', '_blank')}
              >
                Send Project Brief
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name"
                            className="bg-black/20 border-elegant-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Production company"
                            className="bg-black/20 border-elegant-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your@email.com"
                          className="bg-black/20 border-elegant-border focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/20 border-elegant-border focus:border-primary">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="TV Series">TV Series</SelectItem>
                          <SelectItem value="Feature Film">Feature Film</SelectItem>
                          <SelectItem value="Documentary">Documentary</SelectItem>
                          <SelectItem value="Music Video">Music Video</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project, timeline, and location requirements..."
                          className="bg-black/20 border-elegant-border focus:border-primary resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full button-luxury"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;