
import { createContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {  IIsLogged, ILogin, IRegister } from "../interfaces/user.interfaces";
import { postLogin } from "../services/postLogin";
import { postRegister } from "../services/postRegistration";
interface IUserProvidersProps {
    children: ReactNode;
}
export interface IUserContext {
    registerUser: (data: IRegister) => void
    loginUser: (data: ILogin) => void
    loginVisibility: boolean
    setLoginVisibility: React.Dispatch<React.SetStateAction<boolean>>
    registrationVisibility: boolean
    setRegistrationVisibility: React.Dispatch<React.SetStateAction<boolean>>
    confirmVisibility: boolean
    setConfirmVisibility: React.Dispatch<React.SetStateAction<boolean>>
    visibilitySwitch: (place: string) => void
    loadingLogin: boolean
    setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
    loadingRegistration: boolean
    setLoadingRegistration: React.Dispatch<React.SetStateAction<boolean>>
    isLogged: IIsLogged | null
    setIsLogged: React.Dispatch<React.SetStateAction<IIsLogged | null>>
    logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvidersProps) => {

    const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
    const [registrationVisibility, setRegistrationVisibility] = useState<boolean>(false)
    const [confirmVisibility, setConfirmVisibility] = useState<boolean>(false)
    const [loadingLogin, setLoadingLogin] = useState<boolean>(false)
    const [loadingRegistration, setLoadingRegistration] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<IIsLogged | null>(null);


    const navigate = useNavigate();

    const registerUser = async (data: IRegister) => {
        setLoadingRegistration(true)

        try {
            await postRegister(data);
            toast.success("Conta criada com sucesso!");
            setLoadingRegistration(false)
            navigate("/");
        } catch (error) {
            toast.error("Ops! Algo deu errado");
            setLoadingRegistration(false)
            console.error(error)
        }
    }

    const loginUser = async (data: ILogin) => {
        setLoadingLogin(true)

        try {
            const loginInfo = await postLogin(data);
            toast.success("Login realizado com sucesso!");
            window.localStorage.clear();
            window.localStorage.setItem("TOKEN", loginInfo.token);
            window.localStorage.setItem("USERID", loginInfo.user.id);

            setIsLogged(loginInfo.user)
            setLoadingLogin(false)
            navigate("/dashboard")
        } catch (error) {
            toast.error("Ops! Algo deu errado");
            setLoadingLogin(false)
        }
    }

    const logoutUser = () => {
        window.localStorage.clear()
        return navigate("/")
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
            visibilitySwitch,
            loadingLogin,
            setLoadingLogin,
            loadingRegistration,
            setLoadingRegistration,
            isLogged,
            setIsLogged,
            logoutUser
        }}>
          {children}
        </UserContext.Provider>
      );
}
