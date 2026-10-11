import { z } from "zod";
import { NumerologySystem } from "../types/numerology.types";

export const numerologyFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Please enter the name in English alphabets only"),
  dateOfBirth: z.date().nullable().refine((val) => val !== null, {
    message: "Date of Birth is required",
  }),
  system: z.enum(["Chaldean", "Pythagorean", "Sepharial", "Modern"]),
});
