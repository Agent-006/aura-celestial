import { z } from "zod";

export const rashiSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.enum(["Male", "Female", "Other", "Unknown"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().min(1, "Time of birth is required"),
  calculateSidereal: z.boolean(),
  dstCorrection: z.boolean(),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
});

export type RashiFormValues = z.infer<typeof rashiSchema>;
