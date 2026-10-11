"use client";

import { useQuery } from "@tanstack/react-query";
import {
  NumerologyFormValues,
  NumerologyTelemetry,
} from "../types/numerology.types";
import { MOCK_NUMEROLOGY_TELEMETRY } from "../data/numerology.data";

const fetchNumerologyTelemetry = async (
  formData: NumerologyFormValues,
): Promise<NumerologyTelemetry> => {
  // Simulate API call delay for the complex matrix calculations
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // In a real application, you would pass formData to the backend here.
  // For now, we return the imported mock data.
  return MOCK_NUMEROLOGY_TELEMETRY;
};

export const useNumerologyTelemetry = (
  formData: NumerologyFormValues | null,
) => {
  const query = useQuery({
    queryKey: ["numerology", formData],
    queryFn: () => fetchNumerologyTelemetry(formData!),
    enabled: !!formData,
    staleTime: Infinity, // Avoid refetching unless formData changes
  });

  return {
    telemetry: query.data || null,
    isCalculating: query.isLoading || query.isFetching,
    error: query.error,
  };
};
