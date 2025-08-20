import { useEffect, useState } from "react";
import type { Category } from "../types/category";
import { CategoryService } from "../services/categoryService";

export const useCategories = () => {
  const [data, setData] = useState<Category[]>([]);

  async function getCategoryList() {
    try {
      const response = await CategoryService.list();
      setData(response!) //to do: tratar erros e tipar retorno
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  return { data };
};
