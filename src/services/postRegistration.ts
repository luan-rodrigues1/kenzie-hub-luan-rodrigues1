import api from "./api";

export interface IRegister {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
    confirmPassword?: string;
}

export async function postRegister(body: IRegister): Promise<IRegister> {
    const { data } = await api.post<IRegister>(`/users`, body);

    return data;
}