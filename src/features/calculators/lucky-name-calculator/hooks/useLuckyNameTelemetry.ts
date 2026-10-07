import { useMutation } from "@tanstack/react-query";
import {
  LuckyNameCalculatorFormValues,
} from "../schemas/lucky-name-calculator.schema";
import { LuckyNameTelemetryData } from "../types/lucky-name-calculator.types";
import { MOCK_LUCKY_NAME_DATA } from "../data/lucky-name-calculator.data";

const fetchLuckyNameTelemetry = async (
  values: LuckyNameCalculatorFormValues
): Promise<LuckyNameTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_LUCKY_NAME_DATA);
    }, 1500);
  });
};

export const useLuckyNameTelemetry = () => {
  return useMutation({
    mutationFn: fetchLuckyNameTelemetry,
  });
};
