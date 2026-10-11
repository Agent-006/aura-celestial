"use client";

import { useQuery } from "@tanstack/react-query";
import { DashaTelemetryData } from "../types/dasha.types";
import { DashaFormValues } from "../schemas/dasha.schema";
import { mockDashaData } from "../data/dasha.data";

const calculateDasha = async (
  data: DashaFormValues,
): Promise<DashaTelemetryData> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDashaData);
    }, 1500);
  });
};

export const useDashaTelemetry = (
  formData: DashaFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["dasha", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateDasha(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
    ...options,
  });
};
