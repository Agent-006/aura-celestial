// hook removed unused react imports
import { ILLUMINATION_METRICS_DATA } from "../data/moon-phase.data";
import { IlluminationMetric } from "../types/moon-phase.types";
import { useQuery } from "@tanstack/react-query";

export function useIlluminationMetrics() {
  const query = useQuery({
    queryKey: ["illumination-metrics"],
    queryFn: async (): Promise<IlluminationMetric[]> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      return ILLUMINATION_METRICS_DATA;
    },
  });

  return {
    metrics: query.data ?? [],
    isLoading: query.isLoading,
  };
}
