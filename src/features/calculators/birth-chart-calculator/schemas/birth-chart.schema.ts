import { z } from "zod";

export const birthChartSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.enum(["Male", "Female", "Other", "Unknown"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().min(1, "Time of birth is required"),
  timePrecision: z.enum(["Exact", "Approximate"]),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  ayanamsa: z.enum(["Lahiri", "Raman", "KP"]),
  houseSystem: z.enum(["Placidus", "Koch", "Equal", "Whole Sign"]),
  chartStyle: z.enum(["North Indian", "South Indian", "East Indian"]),
});

export type BirthChartFormValues = z.infer<typeof birthChartSchema>;
