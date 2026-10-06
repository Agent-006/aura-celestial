import { useQuery } from "@tanstack/react-query";
import { SunSignTelemetryData } from "../types/sun-sign.types";
import { SunSignFormValues } from "../schemas/sun-sign.schema";
import { mockSunSignData } from "../data/sun-sign.data";

const calculateSunSign = async (
  data: SunSignFormValues,
): Promise<SunSignTelemetryData> => {
  // Simulate complex ephemeris API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSunSignData);
    }, 2500);
  });
};

export const useSunSignTelemetry = (
  formData: SunSignFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["sunSign", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateSunSign(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
  });
};
