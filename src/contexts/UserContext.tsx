import { createContext } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { postRegister } from "../services/postRegistration";


interface IUserProvidersProps {
    children: ReactNode;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IUserContext {
    registerUser: (data: any) => void
    loginUser: (data: any) => void

}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvidersProps) => {

    const navigate = useNavigate();

    const registerUser = async (data: any) => {
        console.log(data)

        try {
            const teste = await postRegister(data);
            // toast.success("Conta criada com sucesso!");
            // navigate("/");
            console.log(teste)
        } catch (error) {
            // toast.error("Ops! Algo deu errado");
            console.log(error)
        }
    }

    const loginUser = (data: any) => {
        console.log(data)
    }

    return (
        <UserContext.Provider value={{
            registerUser,
            loginUser
        }}>
          {children}
        </UserContext.Provider>
      );
}
