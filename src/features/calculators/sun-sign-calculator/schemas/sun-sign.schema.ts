import { z } from "zod";

export const sunSignSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  gender: z.enum(["Male", "Female", "Other", "Unknown"]).optional(),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().min(1, "Time of birth is required"),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
});

export type SunSignFormValues = z.infer<typeof sunSignSchema>;
