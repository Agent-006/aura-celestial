import { z } from "zod";

export const ageCalculatorSchema = z.object({
  fullName: z.string().min(2, "Enter Subject Dossier / Full Name"),
  placeOfBirth: z.string().min(2, "Enter Place of Birth"),
  dateOfBirth: z.string().min(2, "Enter Date of Birth"),
  timeOfBirth: z.string().min(2, "Enter Exact Time of Birth"),
  timezone: z.string().optional(),
  includeVedicChronometry: z.boolean(),
  includeSynodicSolarReturn: z.boolean(),
  includeLunarTithi: z.boolean(),
});

export type AgeCalculatorFormValues = z.infer<typeof ageCalculatorSchema>;
