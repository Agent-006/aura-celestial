import { useQuery } from "@tanstack/react-query";
import { BirthChartTelemetryData } from "../types/birth-chart.types";
import { BirthChartFormValues } from "../schemas/birth-chart.schema";
import { mockBirthChartData } from "../data/birth-chart.data";

const calculateBirthChart = async (
  data: BirthChartFormValues,
): Promise<BirthChartTelemetryData> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBirthChartData);
    }, 1500);
  });
};

export const useBirthChartTelemetry = (
  formData: BirthChartFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["birth-chart", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateBirthChart(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
    ...options,
  });
};
