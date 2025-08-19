import { http } from "../../../api/httpClient";
import type { Product } from "../types/product";

export const ProductService = {
  list: async (): Promise<Product[] | undefined> => {
    try {
      const { data } = await http.get("/products");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (body: Product) => {
    try {
      const { data } = await http.post("/products", body);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: number, body: Product) => {
      try {
      const { data } = await http.put(`/products/${id}`, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
