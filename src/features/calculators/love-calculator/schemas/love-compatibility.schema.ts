import { z } from "zod";

export const partnerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is requied"),
});

export const loveCompatibilityScehma = z.object({
  partnerA: partnerSchema,
  partnerB: partnerSchema,
});

export type LoveCompatibilityValues = z.infer<typeof loveCompatibilityScehma>;
