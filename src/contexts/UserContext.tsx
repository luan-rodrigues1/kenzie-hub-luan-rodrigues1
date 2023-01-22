import { createContext } from "react";
import { ReactNode } from "react";
import {useForm} from "react-hook-form"

interface IUserProvidersProps {
    children: ReactNode;
}

interface IUserContext {

}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvidersProps) => {


    return (
        <UserContext.Provider value={{

        }}>
          {children}
        </UserContext.Provider>
      );
}