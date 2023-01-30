import api from "./api";

export async function deleteTech(id: string){
  const token = localStorage.getItem("TOKEN");
  api.defaults.headers.authorization = `Bearer ${token}`;

  const { data } = await api.delete(`/users/techs/${id}`);
  
  return data;
}