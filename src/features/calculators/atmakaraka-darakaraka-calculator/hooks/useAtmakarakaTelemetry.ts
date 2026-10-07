"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AtmakarakaFormValues,
  AtmakarakaTelemetry,
} from "../types/atmakaraka.types";
import { MOCK_ATMAKARAKA_TELEMETRY } from "../data/atmakaraka.data";

const fetchAtmakarakaTelemetry = async (
  formData: AtmakarakaFormValues,
): Promise<AtmakarakaTelemetry> => {
  // Simulate API delay for complex planetary degree calculations
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return MOCK_ATMAKARAKA_TELEMETRY;
};

export const useAtmakarakaTelemetry = (
  formData: AtmakarakaFormValues | null,
) => {
  const query = useQuery({
    queryKey: ["atmakaraka", formData],
    queryFn: () => fetchAtmakarakaTelemetry(formData!),
    enabled: !!formData,
    staleTime: Infinity,
  });

  return {
    telemetry: query.data || null,
    isCalculating: query.isLoading || query.isFetching,
    error: query.error,
  };
};
