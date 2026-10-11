"use client";

import { useMutation } from "@tanstack/react-query";
import { IshtaDevataTelemetryData } from "../types/ishta-devata.types";
import { MOCK_ISHTA_DEVATA_DATA } from "../data/ishta-devata.data";
import { IshtaDevataFormValues } from "../schemas/ishta-devata.schema";

const calculateIshtaDevata = async (
  values: IshtaDevataFormValues,
): Promise<IshtaDevataTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_ISHTA_DEVATA_DATA);
    }, 1500);
  });
};

export function useIshtaDevataTelemetry(options?: {
  onSuccess?: (data: IshtaDevataTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateIshtaDevata,
    onSuccess: options?.onSuccess,
  });
}
