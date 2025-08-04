import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(100, "Company must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  projectType: z.enum([
    "Commercial",
    "TV Series", 
    "Feature Film",
    "Documentary",
    "Music Video",
    "Other"
  ]),
  projectDetails: z
    .string()
    .min(10, "Please provide at least 10 characters describing your project")
    .max(1000, "Project details must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;