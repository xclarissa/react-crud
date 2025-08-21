import { http } from "../../../api/httpClient";
import type { User } from "../types/user";

export const UserService = {
  getAll: async (): Promise<User[]> => {
    try {
      const { data } = await http.get<User[]>("/users");
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  },
  getById: async (id: string): Promise<User> => {
    try {
      const { data } = await http.get<User>(`/users/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  },
  create: async (user: User): Promise<User> => {
    try {
      const { data } = await http.post<User>("/users", user);
      return data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  update: async (id: string, user: User): Promise<User> => {
    try {
      const { data } = await http.put<User>(`/users/${id}`, user);
      return data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  remove: async (id: string) => {
    try {
      await http.delete(`/users/${id}`);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
};
