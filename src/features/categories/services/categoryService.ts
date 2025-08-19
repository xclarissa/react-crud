import { http } from "../../../api/httpClient";
import type { Category } from "../types/category";

export const ProductService = {
  list: async (): Promise<Category | undefined> => {
    try {
      const { data } = await http.get("/products");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
