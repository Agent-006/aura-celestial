import { z } from "zod";

export const ishtaDevataSchema = z.object({
  fullName: z.string().min(2, "Enter native name"),
  dateOfBirth: z.string().min(1, "Enter date of birth"),
  timeOfBirth: z.string().min(1, "Enter time of birth"),
  placeOfBirth: z.string().min(2, "Enter place of birth"),
  akOverride: z.string().optional(),
  ayanamsa: z.enum(["Lahiri", "Raman", "KP"]),
  nodeCalculation: z.enum(["True Node", "Mean Node"]),
  charaKarakaScheme: z.enum(["8 Planets (incl. Rahu)", "7 Planets (Standard)"]),
});

export type IshtaDevataFormValues = z.infer<typeof ishtaDevataSchema>;
