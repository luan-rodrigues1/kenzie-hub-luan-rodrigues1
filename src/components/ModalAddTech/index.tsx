import { ModalAddTechStyle } from "./style"

const ModalAddTech = () => {
    return (
        <ModalAddTechStyle>
            <div className="titileAdd">
                <h2 className="headlineBold">Cadastrar Tecnologia</h2>
                <button>X</button>
            </div>
            <form action="">
                <label className="headline" htmlFor="">Nome</label>
                <input type="text" placeholder="Digiti aqui..."/>
                <p className="HeadlineItalic">teste</p>
                <label className="headline" htmlFor="">Selecionar status</label>
                <select name="" id="">
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button className="headlineBold buttonAdd">Cadastrar Tecnologia</button>
            </form>
        </ModalAddTechStyle>
    )
}

export default ModalAddTech