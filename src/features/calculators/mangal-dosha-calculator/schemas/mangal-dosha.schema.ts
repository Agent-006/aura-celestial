import { z } from "zod";

export const mangalDoshaSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.enum(["Male", "Female", "Other", "Unknown"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().min(1, "Time of birth is required"),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  verifyEphemeris: z.boolean(),
});

export type MangalDoshaFormValues = z.infer<typeof mangalDoshaSchema>;
