import { useState, useEffect } from "react";
import { SHUKLA_TITHIS_DATA } from "../data/moon-phase.data";
import { EphemerisRow } from "../types/moon-phase.types";

export function useEphemerisMatrix() {
  const [matrixData, setMatrixData] = useState<EphemerisRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading/fetching logic
    const timer = setTimeout(() => {
      setMatrixData(SHUKLA_TITHIS_DATA);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    matrixData,
    isLoading,
  };
}
