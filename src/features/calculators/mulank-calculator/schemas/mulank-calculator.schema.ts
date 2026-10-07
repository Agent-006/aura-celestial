import { z } from "zod";

export const mulankCalculatorSchema = z.object({
  fullName: z.string().min(2, "Enter Subject Dossier / Full Name"),
  dateOfBirth: z.string().min(2, "Select Date of Birth"),
  birthDay: z.string().min(1, "Required"),
  birthMonth: z.string().min(1, "Required"),
  birthYear: z.string().min(4, "Required"),
  placeOfConception: z.string().optional(),
  algorithmSelection: z.string().optional(),
  ephemerisSystem: z.string().optional(),
  planetaryOverride: z.string().optional(),
});

export type MulankCalculatorFormValues = z.infer<typeof mulankCalculatorSchema>;
