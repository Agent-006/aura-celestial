import { z } from "zod";
import { NumerologySystem } from "../types/numerology.types";

export const numerologyFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Please enter the name in English alphabets only"),
  dateOfBirth: z.date({
    required_error: "Date of Birth is required",
    invalid_type_error: "Invalid date format",
  }),
  system: z.enum(["Chaldean", "Pythagorean", "Sepharial", "Modern"] as const, {
    required_error: "Please select a Numerology System",
  }),
});
