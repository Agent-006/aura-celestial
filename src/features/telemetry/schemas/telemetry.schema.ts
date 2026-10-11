import { z } from "zod";

export const telemetryFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  dateOfBirth: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Required format: MM/DD/YYYY"),
  exactTime: z
    .string()
    .regex(
      /^(0?[1-9]|1[0-2]):[0-5][0-9]\s(AM|PM)$/,
      "Required format: HH:MM AM/PM",
    ),
  placeOfBirth: z.string().min(2, "Location is required"),
  chartType: z.enum(["north", "south"]),
});

export type TelemetryFormValues = z.infer<typeof telemetryFormSchema>;
