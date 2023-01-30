import { IReqUpdateTech, IRespAddTech } from "../interfaces/tech.interface";
import api from "./api";

export async function putUpdateTech(id: string, body: IReqUpdateTech): Promise<IRespAddTech>{
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;

    const {data} = await api.put<IRespAddTech>(`/users/techs/${id}`, body);

    return data;
}