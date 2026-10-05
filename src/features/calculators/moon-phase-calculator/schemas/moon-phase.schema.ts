import { z } from "zod";

export const moonPhaseSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.string().min(1, "Please select a gender"),
  dob: z.object({
    day: z.string().min(1, "Day is required"),
    month: z.string().min(1, "Month is required"),
    year: z.string().min(1, "Year is required"),
  }),
  isTimeUnknown: z.boolean(),
  tob: z.object({
    hour: z.string().optional(),
    minute: z.string().optional(),
    second: z.string().optional(),
  }),
  location: z.string().min(2, "Location is required"),
});

export type MoonPhaseValues = z.infer<typeof moonPhaseSchema>;
