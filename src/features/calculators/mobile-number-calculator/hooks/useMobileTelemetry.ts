import { useMutation } from "@tanstack/react-query";
import { MobileTelemetryData } from "../types/mobile-number-calculator.types";
import { MOCK_MOBILE_DATA } from "../data/mobile-number-calculator.data";
import { MobileNumberCalculatorFormValues } from "../schemas/mobile-number-calculator.schema";

const calculateMobileTelemetry = async (
  values: MobileNumberCalculatorFormValues,
): Promise<MobileTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MOBILE_DATA);
    }, 1500);
  });
};

export function useMobileTelemetry(options?: {
  onSuccess?: (data: MobileTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateMobileTelemetry,
    onSuccess: options?.onSuccess,
  });
}
