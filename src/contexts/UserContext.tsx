import { createContext } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { postLogin } from "../services/postLogin";
import { postRegister } from "../services/postRegistration";
interface IUserProvidersProps {
    children: ReactNode;
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
            navigate("/");
            console.log(teste)
        } catch (error) {
            // toast.error("Ops! Algo deu errado");
            console.log(error)
        }
    }

    const loginUser = async (data: any) => {
        try {
            const teste = await postLogin(data);
            // toast.success("Conta criada com sucesso!");
            // navigate("/dashboard");
            console.log("deu certo")
            console.log(teste)
        } catch (error) {
            // toast.error("Ops! Algo deu errado");
            console.log(error)
        }
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
