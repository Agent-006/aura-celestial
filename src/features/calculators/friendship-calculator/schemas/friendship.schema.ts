import { z } from "zod";

export const friendshipSchema = z.object({
  alphaName: z.string().min(2, "Enter a valid name"),
  alphaDob: z.string().min(1, "Enter date of birth"),
  alphaTob: z.string().min(1, "Enter time of birth"),
  alphaPob: z.string().min(2, "Enter place of birth"),

  betaName: z.string().min(2, "Enter a valid name"),
  betaDob: z.string().min(1, "Enter date of birth"),
  betaTob: z.string().min(1, "Enter time of birth"),
  betaPob: z.string().min(2, "Enter place of birth"),

  context: z.string().min(2, "Select or enter platonic context"),
  duration: z.string().min(1, "Select or enter duration"),
});

export type FriendshipFormValues = z.infer<typeof friendshipSchema>;
