import { z } from "zod";

export const newsletterSchema = z.object({
  contact: z.string().min(1, "Coordinate or email is required"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
