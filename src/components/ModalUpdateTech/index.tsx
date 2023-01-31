import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ModalUpdateTechStyle } from "./style"

const ModalUpdateTech = () => {

    const { updateAdd, setUpdateAdd, deleteTechUser, setUpdateStatusTech, updateTechUser, nameUpdateTech, confirmButtonModal, deleteButtonModal } = useContext(TechContext);

    return (
        <ModalUpdateTechStyle hidden={updateAdd}>
            <div className="titileUpdate">
                <h2 className="headlineBold">Atualizar Tecnologia</h2>
                <button onClick={()=> setUpdateAdd(false)}>X</button>
            </div>
            <form action="">
                <label className="headline" htmlFor="nameUpdate">Nome da tecnologia</label>
                <input id="nameUpdate" value={nameUpdateTech} type="text" placeholder="Digiti aqui..." disabled/>
                <label className="headline" htmlFor="statusUpdate">Status</label>
                <select name="" defaultValue={"Iniciante"} id="statusUpdate" onChange={(event) => setUpdateStatusTech(event.target.value)}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div>
                    {!confirmButtonModal ?
                        <button type="button" className="headlineBold buttonUpdate" onClick={() => updateTechUser()}>Salvar alterações</button>
                        :
                        <button type="button" className="headlineBold buttonUpdate" disabled onClick={() => updateTechUser()}><span className="loading"></span></button>
                    }
                    {!deleteButtonModal ?
                        <button type="button" className="buttonTrash" onClick={() => deleteTechUser()}>Excluir</button>
                        :
                        <button type="button" className="buttonTrash" disabled onClick={() => deleteTechUser()}><span className="loading"></span></button>
                    }
                </div>
            </form>
        </ModalUpdateTechStyle>
    )
}

export default ModalUpdateTech