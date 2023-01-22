import api from "./api";
import { ILogin } from "../interfaces/user.interfaces";
import { IInfoUser } from "../interfaces/user.interfaces";

export async function postLogin(body: ILogin): Promise<IInfoUser> {
  const { data } = await api.post<IInfoUser>(`/sessions`, body);

  return data;
}