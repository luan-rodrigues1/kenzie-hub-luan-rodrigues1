import api from "./api";
import { IInfoUser } from "../interfaces/user.interfaces";

export async function getInfoUser(): Promise<IInfoUser> {
    const token = window.localStorage.getItem("TOKEN");
    const { data } = await api.get<IInfoUser>(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }