import { useQuery } from "@tanstack/react-query";
import { RashiTelemetryData } from "../types/rashi.types";
import { RashiFormValues } from "../schemas/rashi.schema";
import { mockRashiData } from "../data/rashi.data";

const calculateRashi = async (
  data: RashiFormValues,
): Promise<RashiTelemetryData> => {
  // Simulate complex ephemeris API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRashiData);
    }, 1500);
  });
};

export const useRashiTelemetry = (
  formData: RashiFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["rashi", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateRashi(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
    ...options,
  });
};
