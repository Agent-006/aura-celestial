import { z } from "zod";

export const kaalSarpSchema = z.object({
  fullName: z.string().min(2, "Enter a valid name"),
  dateOfBirth: z.string().min(1, "Enter date of birth"),
  timeOfBirth: z.string().min(1, "Enter time of birth"),
  placeOfBirth: z.string().min(2, "Enter place of birth"),
  orbitalAxis: z.string().min(1, "Select orbital axis"),
  houseSystem: z.string().min(1, "Select house system"),
  astrometricEngine: z.string().min(1, "Select astrometric calculation engine"),
});

export type KaalSarpFormValues = z.infer<typeof kaalSarpSchema>;
