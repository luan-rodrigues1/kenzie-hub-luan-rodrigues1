import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { IAddTech } from "../interfaces/tech.interface";
import { deleteTech } from "../services/DeleteTech";
import { postAddTech } from "../services/postAddTech";
import { UserContext } from "./UserContext";

interface ITechProvidersProps {
    children: ReactNode;
}

export interface ITechContext {
    addTechUser: (body: IAddTech) => Promise<void>
    modalAdd: boolean
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>
    updateAdd: boolean
    setUpdateAdd: React.Dispatch<React.SetStateAction<boolean>>
    deleteTechUser: (id: string) => Promise<void>
}

export const TechContext = createContext<ITechContext>({} as ITechContext);


export const TechProvider = ({ children }: ITechProvidersProps) => {
    
    const { techsUser, setTechsUser } = useContext(UserContext);
    const [modalAdd, setModalAdd] = useState<boolean>(false)
    const [updateAdd, setUpdateAdd] = useState<boolean>(false)



    const addTechUser = async (body: IAddTech) => {
        try {
          const data = await postAddTech(body);
          setTechsUser([...techsUser, data]);
          setModalAdd(false)
          toast.success("Tecnologia adicionada!");
        } catch (error) {
          console.error(error);
          toast.error("Ops! Algo deu errado");
        }
    };

    const deleteTechUser = async (id: string) => {
        try {
          await deleteTech(id);
          const filterDelete = techsUser.filter((Element) => {
            return Element.id !== id;
          });
          setTechsUser(filterDelete);
          setUpdateAdd(false)
          toast.success("Tecnologia removida!");
        } catch (error) {
          toast.error("Ops! Algo deu errado");
        }
    };

    return (
        <TechContext.Provider value={{
            addTechUser,
            modalAdd,
            setModalAdd,
            updateAdd,
            setUpdateAdd,
            deleteTechUser
        }}>
            {children}
        </TechContext.Provider>
    )
}