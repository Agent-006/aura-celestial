import { z } from "zod";

export const luckyVehicleSchema = z.object({
  mulank: z.number().min(1).max(9),
  bhagyank: z.number().min(1).max(9),
  registrationString: z.string().min(4, "Enter valid registration number"),
  vehicleColor: z.string().min(1, "Select a color"),
  vehicleActivity: z.string().min(1, "Select an activity"),
  logicProtocol: z.enum(["Chaldean", "Pythagorean"]),
});

export type LuckyVehicleFormValues = z.infer<typeof luckyVehicleSchema>;
