import { useQuery } from "@tanstack/react-query";
import { ANURADHA_DETAILS, PADA_TWO_DETAILS } from "../data/nakshatra.data";
import { NakshatraDetails, PadaDetails } from "../types/nakshatra.types";

export function useNakshatraTelemetry() {
  const query = useQuery({
    queryKey: ["nakshatra-telemetry"],
    queryFn: async (): Promise<{
      nakshatra: NakshatraDetails;
      pada: PadaDetails;
    }> => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return { nakshatra: ANURADHA_DETAILS, pada: PADA_TWO_DETAILS };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}
