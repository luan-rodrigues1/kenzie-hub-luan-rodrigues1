import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getInfoUser } from "../services/getInfoUser";
import { UserContext } from "./UserContext";

interface IAuthProvidersProps {
    children: ReactNode;
}

export interface IAuthContext {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthProvider = ({ children }: IAuthProvidersProps) => {

    const { setIsLogged} = useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadUser() {

          const token = window.localStorage.getItem("TOKEN"); 

          if(token !== null) {
            try {
                const data = await getInfoUser();
                setIsLogged(data);
            } catch (error) {
                console.error(error);
            }
          }

          setLoading(false);
        }
    
        loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={{
            loading,
            setLoading
        }}>
        {children}
        </AuthContext.Provider>
    )
}