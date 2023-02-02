import api from "./api";
import { IRegisterResponse } from "../interfaces/user.interfaces";
import { IRegister } from "../interfaces/user.interfaces";

export async function postRegister(body: IRegister): Promise<IRegisterResponse> {
    const { data } = await api.post<IRegisterResponse>(`/users`, body);

    return data;
}