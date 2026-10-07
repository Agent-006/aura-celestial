import { useMutation } from "@tanstack/react-query";
import { DestinyTelemetryData } from "../types/destiny-number-calculator.types";
import { MOCK_DESTINY_DATA } from "../data/destiny-number-calculator.data";
import { DestinyNumberCalculatorFormValues } from "../schemas/destiny-number-calculator.schema";

const calculateDestinyTelemetry = async (
  values: DestinyNumberCalculatorFormValues,
): Promise<DestinyTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DESTINY_DATA);
    }, 1500);
  });
};

export function useDestinyTelemetry(options?: {
  onSuccess?: (data: DestinyTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateDestinyTelemetry,
    onSuccess: options?.onSuccess,
  });
}
