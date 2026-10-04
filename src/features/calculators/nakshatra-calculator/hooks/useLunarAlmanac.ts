import { useQuery } from "@tanstack/react-query";
import { LUNAR_ALMANAC_DATA } from "../data/nakshatra.data";
import { AlmanacRow } from "../types/nakshatra.types";

export function useLunarAlmanac() {
  const query = useQuery({
    queryKey: ["lunar-almanac"],
    queryFn: async (): Promise<AlmanacRow[]> => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return LUNAR_ALMANAC_DATA;
    },
  });

  return {
    rows: query.data ?? [],
    isLoading: query.isLoading,
  };
}
