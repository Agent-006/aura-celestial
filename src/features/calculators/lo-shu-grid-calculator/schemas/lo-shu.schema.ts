import { z } from "zod";

export const loShuSchema = z.object({
  fullName: z.string().min(2, "Enter native name"),
  gender: z.enum(["Male", "Female", "Other"]),
  dateOfBirth: z.string().min(1, "Enter date of birth"),
  timeOfBirth: z.string().min(1, "Enter time of birth"),
  placeOfBirth: z.string().min(2, "Enter place of birth"),
  algorithm: z.enum(["Traditional", "Advanced", "Karmic"]),
  timePrecision: z.enum(["Exact", "Approximate"]),
});

export type LoShuFormValues = z.infer<typeof loShuSchema>;
