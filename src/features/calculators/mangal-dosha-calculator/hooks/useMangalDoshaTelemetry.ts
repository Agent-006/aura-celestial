import { useQuery } from "@tanstack/react-query";
import { MangalDoshaTelemetryData } from "../types/mangal-dosha.types";
import { MangalDoshaFormValues } from "../schemas/mangal-dosha.schema";
import { mockMangalDoshaData } from "../data/mangal-dosha.data";

const calculateMangalDosha = async (
  data: MangalDoshaFormValues,
): Promise<MangalDoshaTelemetryData> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMangalDoshaData);
    }, 1500);
  });
};

export const useMangalDoshaTelemetry = (
  formData: MangalDoshaFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["mangal-dosha", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateMangalDosha(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
    ...options,
  });
};
