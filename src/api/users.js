import { apiClient } from "./axios";

export const fetchUsers = async () => {
  const { data } = await apiClient.get("/users");
  return data;
};