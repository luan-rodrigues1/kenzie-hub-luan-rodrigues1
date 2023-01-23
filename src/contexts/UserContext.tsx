import { createContext, useState } from "react";
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
    loginVisibility: boolean
    setLoginVisibility: React.Dispatch<React.SetStateAction<boolean>>
    registrationVisibility: boolean
    setRegistrationVisibility: React.Dispatch<React.SetStateAction<boolean>>
    confirmVisibility: boolean
    setConfirmVisibility: React.Dispatch<React.SetStateAction<boolean>>
    visibilitySwitch: (place: string) => void
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvidersProps) => {

    const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
    const [registrationVisibility, setRegistrationVisibility] = useState<boolean>(false)
    const [confirmVisibility, setConfirmVisibility] = useState<boolean>(false)

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

    const visibilitySwitch = (place: string) => {
        if(place === "login") {
            if(loginVisibility){
                return setLoginVisibility(false)
            } 
            return setLoginVisibility(true)
        }

        if(place === "registration") {
            if(registrationVisibility){
                return setRegistrationVisibility(false)
            } 
            return setRegistrationVisibility(true)
        }

        if(place === "confirm") {
            if(confirmVisibility){
                return setConfirmVisibility(false)
            } 
            return setConfirmVisibility(true)
        }
    }

    return (
        <UserContext.Provider value={{
            registerUser,
            loginUser,
            loginVisibility,
            setLoginVisibility,
            registrationVisibility,
            setRegistrationVisibility,
            confirmVisibility,
            setConfirmVisibility,
            visibilitySwitch
        }}>
          {children}
        </UserContext.Provider>
      );
}
