import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ModalAddTechStyle } from "./style"

const ModalAddTech = () => {

    const { 
        modalAdd, 
        setModalAdd,  
        confirmButtonModal, 
        valueTechAdd, 
        setValueTechAdd, 
        selectTechAdd, 
        setSelectTechAdd,
        errorTech,
        techValidation
    } = useContext(TechContext);
    

    return (
        <ModalAddTechStyle hidden={modalAdd}>
            <div className="titileAdd">
                <h2 className="headlineBold">Cadastrar Tecnologia</h2>
                <button onClick={() => setModalAdd(false)}>X</button>
            </div>
            <form action="" onSubmit={(event) => {return (event.preventDefault(), techValidation())}}>
                <label className="headline" htmlFor="title">Nome</label>
                <input value={valueTechAdd} onChange={(event) => setValueTechAdd(event.target.value)} id="title" type="text" placeholder="Digiti aqui..."/>
                <p className={!errorTech ? "HeadlineItalic hidden" : "HeadlineItalic"} >Campo obrigatório</p>
                <label className="headline" htmlFor="status">Selecionar status</label>
                <select value={selectTechAdd} onChange={(event) => setSelectTechAdd(event.target.value)} id="status" >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {!confirmButtonModal ? 
                    <button className="headlineBold buttonAdd">Cadastrar Tecnologia</button>
                    :
                    <button className="headlineBold buttonAdd" disabled><span className="loading"></span></button>
                }
            </form>
        </ModalAddTechStyle>
    )
}

export default ModalAddTech