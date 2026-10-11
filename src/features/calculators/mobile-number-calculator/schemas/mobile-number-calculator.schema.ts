import { z } from "zod";

export const mobileNumberCalculatorSchema = z.object({
  fullName: z.string().min(2, "Enter Subject Dossier / Full Name"),
  dateOfBirth: z.string().optional(),
  mobileNumber: z.string().min(10, "Mobile Number must be at least 10 digits"),
  algorithmSelection: z.string().optional(),
  primaryUsageIntent: z.string().optional(),
  currentCarrier: z.string().optional(),
});

export type MobileNumberCalculatorFormValues = z.infer<
  typeof mobileNumberCalculatorSchema
>;
