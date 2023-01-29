import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ModalUpdateTechStyle } from "./style"
const ModalUpdateTech = () => {

    const { updateAdd, setUpdateAdd } = useContext(TechContext);

    return (
        <ModalUpdateTechStyle hidden={updateAdd}>
            <div className="titileUpdate">
                <h2 className="headlineBold">Tecnologia Detalhes</h2>
                <button onClick={()=> setUpdateAdd(false)}>X</button>
            </div>
            <form action="">
                <label className="headline" htmlFor="">Nome do projeto</label>
                <input type="text" placeholder="Digiti aqui..."/>
                <p className="HeadlineItalic">teste</p>
                <label className="headline" htmlFor="">Status</label>
                <select name="" id="">
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div>
                    <button className="headlineBold buttonUpdate">Salvar alterações</button>
                    <button type="button" className="buttonTrash">Excluir</button>
                </div>
            </form>
        </ModalUpdateTechStyle>
    )
}

export default ModalUpdateTech