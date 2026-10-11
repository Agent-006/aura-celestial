"use client";

import { useQuery } from "@tanstack/react-query";
import { SadeSatiTelemetry } from "../types/sadesati.types";
import {
  EPHEMERIS_DATA,
  PROGRESS_DATA,
  TRAJECTORY_DATA,
  DRISHTI_DATA,
  SHANTI_PROTOCOLS,
} from "../data/sadesati.data";

export function useSadeSatiTelemetry() {
  const query = useQuery({
    queryKey: ["sade-sati-telemetry"],
    queryFn: async (): Promise<SadeSatiTelemetry> => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        ephemeris: EPHEMERIS_DATA,
        progress: PROGRESS_DATA,
        trajectory: TRAJECTORY_DATA,
        drishti: DRISHTI_DATA,
        protocols: SHANTI_PROTOCOLS,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}
