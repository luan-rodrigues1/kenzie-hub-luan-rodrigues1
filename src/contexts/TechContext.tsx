import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { IRespAddTech } from "../interfaces/tech.interface";
import { deleteTech } from "../services/DeleteTech";
import { getInfoUser } from "../services/getInfoUser";
import { postAddTech } from "../services/postAddTech";
import { putUpdateTech } from "../services/putUpdateTech";
import { UserContext } from "./UserContext";

interface ITechProvidersProps {
    children: ReactNode;
}

export interface ITechContext {
    addTechUser: (body: IRespAddTech) => Promise<void>
    modalAdd: boolean
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>
    updateAdd: boolean
    setUpdateAdd: React.Dispatch<React.SetStateAction<boolean>>
    deleteTechUser: () => Promise<void>
    selectTechId: string
    setSelectTechId: React.Dispatch<React.SetStateAction<string>>
    updateStatusTech: string
    setUpdateStatusTech: React.Dispatch<React.SetStateAction<string>>
    updateTechUser: () => Promise<void>
    nameUpdateTech: string
    setNameUpdateTech: React.Dispatch<React.SetStateAction<string>>
    confirmButtonModal: boolean
    setConfirmButtonModal: React.Dispatch<React.SetStateAction<boolean>>
    deleteButtonModal: boolean
    setDeleteButtonModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TechContext = createContext<ITechContext>({} as ITechContext);


export const TechProvider = ({ children }: ITechProvidersProps) => {
    
    const { setIsLogged} = useContext(UserContext);
    
    const [modalAdd, setModalAdd] = useState<boolean>(false)
    const [updateAdd, setUpdateAdd] = useState<boolean>(false)
    const [selectTechId, setSelectTechId] = useState<string>("")
    const [updateStatusTech, setUpdateStatusTech] = useState<string>("")
    const [nameUpdateTech, setNameUpdateTech] = useState<string>("")
    const [confirmButtonModal, setConfirmButtonModal] = useState<boolean>(false)
    const [deleteButtonModal, setDeleteButtonModal] = useState<boolean>(false)


    const updateInfo = async () => {
      const token = window.localStorage.getItem("TOKEN"); 

      if(token !== null) {
        const data = await getInfoUser();
        setIsLogged(data)
      }
    }

    const addTechUser = async (body: IRespAddTech) => {
      setConfirmButtonModal(true)

      try {
        await postAddTech(body);

        updateInfo()
        setConfirmButtonModal(false)
        setModalAdd(false)
        toast.success("Tecnologia adicionada!");
      } catch (error) {
        console.error(error);
        toast.error("Ops! Algo deu errado");
      }
    };

    const deleteTechUser = async () => {
      setDeleteButtonModal(true)
      try {
        await deleteTech(selectTechId);

        updateInfo()
        setDeleteButtonModal(false)
        setUpdateAdd(false)
        toast.success("Tecnologia removida!");
      } catch (error) {
        toast.error("Ops! Algo deu errado");
      }
    };

    const updateTechUser = async () => {
      setConfirmButtonModal(true)
      const formattingStatus = {
        status: updateStatusTech
      }

      try {
        await putUpdateTech(selectTechId, formattingStatus);
        updateInfo()
        setConfirmButtonModal(false)
        setUpdateAdd(false)
        toast.success("Tecnologia atualizada!");
      } catch(error) {
        console.error(error)
        toast.error("Ops! Algo deu errado");
      }

    }

    return (
        <TechContext.Provider value={{
            addTechUser,
            modalAdd,
            setModalAdd,
            updateAdd,
            setUpdateAdd,
            deleteTechUser,
            selectTechId,
            setSelectTechId,
            updateStatusTech,
            setUpdateStatusTech,
            updateTechUser,
            nameUpdateTech,
            setNameUpdateTech,
            confirmButtonModal,
            setConfirmButtonModal,
            deleteButtonModal,
            setDeleteButtonModal
        }}>
            {children}
        </TechContext.Provider>
    )
}