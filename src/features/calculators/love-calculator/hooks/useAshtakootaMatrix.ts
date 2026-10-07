"use client";

import { useQuery } from "@tanstack/react-query";
import { ASHTAKOOTA_DATA } from "../data/love-compatibility.data";
import { KootaRow } from "../types/love-compatibility.types";

export function useAshtakootaMatrix() {
  const query = useQuery({
    queryKey: ["ashtakoota-matrix"],
    queryFn: async (): Promise<KootaRow[]> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      return ASHTAKOOTA_DATA;
    },
  });

  return {
    kootas: query.data ?? [],
    isLoading: query.isLoading,
  };
}