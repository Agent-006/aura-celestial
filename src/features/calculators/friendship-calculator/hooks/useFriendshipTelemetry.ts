import { useMutation } from "@tanstack/react-query";
import { FriendshipFormValues } from "../schemas/friendship.schema";
import { FriendshipTelemetryData } from "../types/friendship.types";
import { MOCK_FRIENDSHIP_DATA } from "../data/friendship.data";

const calculateFriendshipMatrix = async (
  formData: FriendshipFormValues
): Promise<FriendshipTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_FRIENDSHIP_DATA);
    }, 1800);
  });
};

export function useFriendshipTelemetry(options?: {
  onSuccess?: (data: FriendshipTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateFriendshipMatrix,
    onSuccess: options?.onSuccess,
  });
}
