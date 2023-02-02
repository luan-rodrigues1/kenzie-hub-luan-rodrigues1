import api from "./api";
import { IIsLogged } from "../interfaces/user.interfaces";

export async function getInfoUser(): Promise<IIsLogged> {
    const token = window.localStorage.getItem("TOKEN");
    const { data } = await api.get<IIsLogged>(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }