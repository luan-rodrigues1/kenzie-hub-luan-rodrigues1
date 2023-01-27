import plus from "../../assets/plus.png"
import TechnologiesCard from "../TechnologiesCard"
import { TechnologiesListStyle } from "./style"

const TechnologiesList = () => {
    return (
        <TechnologiesListStyle>
            <div className="boxInfoList">
                <h3 className="title1">Tecnologias</h3>
                <button><img src={plus} alt="buttão de adicionar tecnologia" /></button>
            </div>
            <TechnologiesCard/>
        </TechnologiesListStyle>
    )
}

export default TechnologiesList