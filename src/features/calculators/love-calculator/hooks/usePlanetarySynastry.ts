"use client";

import { useQuery } from "@tanstack/react-query";
import { PLANETARY_SYNASTRY_DATA } from "../data/love-compatibility.data";
import { AspectRow } from "../types/love-compatibility.types";

export function usePlanetarySynastry() {
  const query = useQuery({
    queryKey: ["planetary-synastry"],
    queryFn: async (): Promise<AspectRow[]> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      return PLANETARY_SYNASTRY_DATA;
    },
  });

  return {
    aspects: query.data ?? [],
    isLoading: query.isLoading,
  };
}
