import { http } from "../../../api/httpClient";
import type { Category } from "../types/category";

export const CategoryService = {
  list: async (): Promise<Category[] | undefined> => {
    try {
      const { data } = await http.get<Category[]>("/categories");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
