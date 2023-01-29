import api from "./api";

export async function deleteTech(id: string): Promise<string> {
  const token = localStorage.getItem("TOKEN");
  api.defaults.headers.authorization = `Bearer ${token}`;

  const { data } = await api.delete<string>(`/users/techs/${id}`);
  return data;
}