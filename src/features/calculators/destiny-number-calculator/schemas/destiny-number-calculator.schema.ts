import { z } from "zod";

export const destinyNumberCalculatorSchema = z.object({
  fullName: z.string().min(2, "Enter Subject Dossier / Full Name"),
  birthLocation: z.string().optional(),
  numerologySystem: z.string().optional(),
  birthDate: z.string().min(1, "Enter Date"),
  birthMonth: z.string().min(1, "Enter Month"),
  birthYear: z.string().min(4, "Enter Year"),
  birthTime: z.string().optional(),
  calculationMode: z.string().optional(),
});

export type DestinyNumberCalculatorFormValues = z.infer<
  typeof destinyNumberCalculatorSchema
>;
