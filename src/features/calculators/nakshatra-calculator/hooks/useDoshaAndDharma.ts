"use client";

import { useQuery } from "@tanstack/react-query";
import {
  DOSHA_ANALYSIS_DATA,
  DHARMA_PROTOCOL_DATA,
} from "../data/nakshatra.data";
import { DoshaAnalysis, DharmaProtocol } from "../types/nakshatra.types";

export function useDoshaAndDharma() {
  const query = useQuery({
    queryKey: ["dosha-dharma"],
    queryFn: async (): Promise<{
      dosha: DoshaAnalysis;
      dharma: DharmaProtocol;
    }> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 150));
      return { dosha: DOSHA_ANALYSIS_DATA, dharma: DHARMA_PROTOCOL_DATA };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}
