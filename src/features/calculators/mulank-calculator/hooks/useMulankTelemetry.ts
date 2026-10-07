import { useMutation } from "@tanstack/react-query";
import { MulankTelemetryData } from "../types/mulank-calculator.types";
import { MOCK_MULANK_DATA } from "../data/mulank-calculator.data";
import { MulankCalculatorFormValues } from "../schemas/mulank-calculator.schema";

const calculateMulankTelemetry = async (
  values: MulankCalculatorFormValues,
): Promise<MulankTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MULANK_DATA);
    }, 1500);
  });
};

export function useMulankTelemetry(options?: {
  onSuccess?: (data: MulankTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateMulankTelemetry,
    onSuccess: options?.onSuccess,
  });
}
