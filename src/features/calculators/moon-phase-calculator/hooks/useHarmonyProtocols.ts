"use client";

import { useQuery } from "@tanstack/react-query";
import { LUNAR_HARMONY_PROTOCOLS_DATA } from "../data/moon-phase.data";
import { HarmonyProtocol } from "../types/moon-phase.types";

export function useHarmonyProtocols() {
  const query = useQuery({
    queryKey: ["harmony-protocols"],
    queryFn: async (): Promise<HarmonyProtocol[]> => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 100));
      return LUNAR_HARMONY_PROTOCOLS_DATA;
    },
  });

  return {
    protocols: query.data ?? [],
    isLoading: query.isLoading,
  };
}
