import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  newsletterSchema,
  type NewsletterFormData,
} from "../schemas/newsletter.schema";

export const useNewsletter = () => {
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { contact: "" },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    },
    onSuccess: (data) => {
      console.log("Subscribed successfully:", data.contact);
      form.reset();
    },
    onError: (error) => {
      console.log("Subscription failed:", error);
    },
  });

  const subscribe = (data: NewsletterFormData) => {
    subscribeMutation.mutate(data);
  };

  return {
    form,
    subscribe,
    isLoading: subscribeMutation.isPending,
    isSuccess: subscribeMutation.isSuccess,
    isError: subscribeMutation.isError,
  };
};
