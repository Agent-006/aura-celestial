import { useQuery } from "@tanstack/react-query";
import { ANATOMY_METRICS_DATA } from "../data/nakshatra.data";
import { AnatomyMetric } from "../types/nakshatra.types";

export function useAstrologicalAnatomy() {
  const query = useQuery({
    queryKey: ["astrological-anatomy"],
    queryFn: async (): Promise<AnatomyMetric[]> => {
      await new Promise((resolve) => setTimeout(resolve, 150));
      return ANATOMY_METRICS_DATA;
    },
  });

  return {
    metrics: query.data ?? [],
    isLoading: query.isLoading,
  };
}
