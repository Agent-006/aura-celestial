import { useMutation } from "@tanstack/react-query";
import { NameCompatibilityTelemetryData } from "../types/name-compatibility.types";
import { MOCK_NAME_COMPATIBILITY_DATA } from "../data/name-compatibility.data";
import { NameCompatibilityFormValues } from "../schemas/name-compatibility.schema";

const calculateNameCompatibility = async (
  values: NameCompatibilityFormValues,
): Promise<NameCompatibilityTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_NAME_COMPATIBILITY_DATA);
    }, 1500);
  });
};

export function useNameCompatibilityTelemetry(options?: {
  onSuccess?: (data: NameCompatibilityTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateNameCompatibility,
    onSuccess: options?.onSuccess,
  });
}
