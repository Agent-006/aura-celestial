import { z } from "zod";

export const flamesFormSchema = z.object({
  entityA: z.string().min(2, "Name must be at least 2 characters"),
  entityAGender: z.enum(["Masculine/Purusha", "Feminine/Prakriti"]),
  entityB: z.string().min(2, "Name must be at least 2 characters"),
  entityBGender: z.enum(["Masculine/Purusha", "Feminine/Prakriti"]),
  linguisticProtocol: z.enum(["Vedic Akshara Phonetics", "Orthographic Rubrics"]),
  crossCulturalVariants: z.boolean(),
});

export type FlamesFormValues = z.infer<typeof flamesFormSchema>;
