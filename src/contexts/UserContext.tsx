import { createContext } from "react";
import { ReactNode } from "react";


interface IUserProvidersProps {
    children: ReactNode;
}

export interface IRegisterUser {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    module: string;
    confirmPassword: string;
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

    const registerUser = (data: any) => {
        console.log(data)
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
