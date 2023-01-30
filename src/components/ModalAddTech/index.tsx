import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { IRespAddTech } from "../../interfaces/tech.interface";
import { formAddTechSchema } from "../../schemas/tech.schemas";
import { ModalAddTechStyle } from "./style"

const ModalAddTech = () => {

    const { modalAdd, setModalAdd, addTechUser } = useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IRespAddTech>({
        resolver: yupResolver(formAddTechSchema),
    });

    return (
        <ModalAddTechStyle hidden={modalAdd}>
            <div className="titileAdd">
                <h2 className="headlineBold">Cadastrar Tecnologia</h2>
                <button onClick={() => setModalAdd(false)}>X</button>
            </div>
            <form action="" onSubmit={handleSubmit(addTechUser)}>
                <label className="headline" htmlFor="title">Nome</label>
                <input id="title" type="text" placeholder="Digiti aqui..." {...register("title")}/>
                <p className="HeadlineItalic">{errors.title?.message}</p>
                <label className="headline" htmlFor="status">Selecionar status</label>
                <select id="status" {...register("status")}>
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