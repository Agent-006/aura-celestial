import { z } from "zod";

export const nameCompatibilitySchema = z.object({
  personA: z.object({
    fullName: z.string().min(2, "Enter Full Name"),
    alias: z.string().optional(),
    dob: z.string().optional(),
  }),
  personB: z.object({
    fullName: z.string().min(2, "Enter Full Name"),
    alias: z.string().optional(),
    dob: z.string().optional(),
  }),
  numerologyModel: z.enum(["Chaldean", "Pythagorean", "Kabbalah"]),
});

export type NameCompatibilityFormValues = z.infer<typeof nameCompatibilitySchema>;
