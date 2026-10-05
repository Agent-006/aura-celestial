import { useQuery } from "@tanstack/react-query";
import { SHUKLA_TITHIS_DATA } from "../data/moon-phase.data";
import { EphemerisRow } from "../types/moon-phase.types";

export function useEphemerisMatrix() {
  const query = useQuery({
    queryKey: ["ephemeris-matrix"],
    queryFn: async (): Promise<EphemerisRow[]> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      return SHUKLA_TITHIS_DATA;
    },
  });

  return {
    matrixData: query.data ?? [],
    isLoading: query.isLoading,
  };
}
