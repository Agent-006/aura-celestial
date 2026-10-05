import { z } from "zod";

export const sadeSatiFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Please select a gender",
  }),
  dobDay: z.string().min(1, "Day is required"),
  dobMonth: z.string().min(1, "Month is required"),
  dobYear: z.string().min(4, "Year is required"),
  isTimeUnknown: z.boolean(),
  tobHour: z.string().optional(),
  tobMinute: z.string().optional(),
  tobSecond: z.string().optional(),
  birthPlace: z.string().min(2, "Birth place is required"),
});
