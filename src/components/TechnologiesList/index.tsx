import { useContext } from "react";
import plus from "../../assets/plus.png"
import { TechContext } from "../../contexts/TechContext";
import TechnologiesCard from "../TechnologiesCard"
import { TechnologiesListStyle } from "./style"

const TechnologiesList = () => {

    const { setModalAdd } = useContext(TechContext);

    return (
        <TechnologiesListStyle>
            <div className="boxInfoList">
                <h3 className="title1">Tecnologias</h3>
                <button onClick={() => setModalAdd(true)}><img src={plus} alt="buttão de adicionar tecnologia" /></button>
            </div>
            <TechnologiesCard/>
        </TechnologiesListStyle>
    )
}

export default TechnologiesList