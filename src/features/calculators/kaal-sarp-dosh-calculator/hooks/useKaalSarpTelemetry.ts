import { useMutation } from "@tanstack/react-query";
import { KaalSarpFormValues } from "../schemas/kaal-sarp.schema";
import { KaalSarpTelemetryData } from "../types/kaal-sarp.types";
import { MOCK_KAAL_SARP_DATA } from "../data/kaal-sarp.data";

const calculateKaalSarpDosha = async (
  formData: KaalSarpFormValues,
): Promise<KaalSarpTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_KAAL_SARP_DATA);
    }, 1800);
  });
};

export function useKaalSarpTelemetry(options?: {
  onSuccess?: (data: KaalSarpTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateKaalSarpDosha,
    onSuccess: options?.onSuccess,
  });
}
