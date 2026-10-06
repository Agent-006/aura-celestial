import { useMutation } from "@tanstack/react-query";
import { FlamesFormValues } from "../schemas/flames.schema";
import { FlamesTelemetryData } from "../types/flames.types";
import { MOCK_FLAMES_DATA } from "../data/flames.data";

// Mock API Call
const calculateFlamesMatrix = async (formData: FlamesFormValues): Promise<FlamesTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_FLAMES_DATA);
    }, 1800);
  });
};

export function useFlamesTelemetry(options?: { onSuccess?: (data: FlamesTelemetryData) => void }) {
  return useMutation({
    mutationFn: calculateFlamesMatrix,
    onSuccess: options?.onSuccess,
  });
}
