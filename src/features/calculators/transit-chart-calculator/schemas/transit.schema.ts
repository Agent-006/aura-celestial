import { z } from "zod";

export const transitSchema = z.object({
  // Natal Ephemeris
  fullName: z.string().min(2, "Enter native name"),
  dateOfBirth: z.string().min(1, "Enter date of birth"),
  timeOfBirth: z.string().min(1, "Enter time of birth"),
  placeOfBirth: z.string().min(2, "Enter place of birth"),
  moonSign: z.string().min(1, "Select moon sign"),
  sunSign: z.string().min(1, "Select sun sign"),
  
  // Target Gochar Horizon
  transitDate: z.string().min(1, "Enter transit date"),
  transitLocation: z.string().min(1, "Enter transit location"),
  ayanamsa: z.enum(["Lahiri", "Raman", "KP"]),
  houseSystem: z.enum(["Whole Sign", "Placidus", "Koch"]),
  chartStyle: z.enum(["North Indian", "South Indian", "East Indian"]),
  nodeCalculation: z.enum(["True Node", "Mean Node"]),
});

export type TransitFormValues = z.infer<typeof transitSchema>;
