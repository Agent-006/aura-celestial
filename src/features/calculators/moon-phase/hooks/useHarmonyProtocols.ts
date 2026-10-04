import { useState, useEffect } from "react";
import { LUNAR_HARMONY_PROTOCOLS_DATA } from "../data/moon-phase.data";
import { HarmonyProtocol } from "../types/moon-phase.types";

export function useHarmonyProtocols() {
  const [protocols, setProtocols] = useState<HarmonyProtocol[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading/fetching logic
    const timer = setTimeout(() => {
      setProtocols(LUNAR_HARMONY_PROTOCOLS_DATA);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    protocols,
    isLoading,
  };
}
