import api from "./api";

export async function putUpdateTech(id: string, body: any){
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;

    const data = await api.put(`/users/techs/${id}`, body);
    
    return data;
}