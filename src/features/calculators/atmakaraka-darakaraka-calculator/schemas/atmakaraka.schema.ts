import { z } from "zod";

export const atmakarakaFormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    gender: z.enum(["Male", "Female", "Other"]),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    isTimeUnknown: z.boolean(),
    timeOfBirth: z.string().optional(),
    placeOfBirth: z.string().min(2, "Place of birth is required"),
  })
  .refine(
    (data) =>
      data.isTimeUnknown || (data.timeOfBirth && data.timeOfBirth.length > 0),
    {
      message: "Time of birth is required unless unknown",
      path: ["timeOfBirth"],
    },
  );
