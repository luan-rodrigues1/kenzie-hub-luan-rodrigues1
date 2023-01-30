import { IReqAddTech, IRespAddTech } from "../interfaces/tech.interface";
import api from "./api";

export async function postAddTech(body: IReqAddTech): Promise<IRespAddTech> {
    const token = localStorage.getItem("TOKEN");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.post<IRespAddTech>(`/users/techs`, body);
    return data;
}