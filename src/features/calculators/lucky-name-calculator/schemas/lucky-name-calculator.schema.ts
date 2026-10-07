import { z } from "zod";

export const luckyNameCalculatorSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  numerologySystem: z.string().optional(),
  birthDate: z.string().optional(),
  birthMonth: z.string().optional(),
  birthYear: z.string().optional(),
  usageIntent: z.string().optional(),
  phoneticFilter: z.string().optional(),
});

export type LuckyNameCalculatorFormValues = z.infer<typeof luckyNameCalculatorSchema>;
