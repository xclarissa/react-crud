import { useForm } from "react-hook-form";
import type { Product } from "../types/product";

export const useProductFormLogic = (defaultValues: Partial<Product>) => {
  const form = useForm<Product>({
    defaultValues,
  });

  const type = form.watch("type");
  const requiresWeight = type === "physical";

  return { form, requiresWeight };
};
