import { TechnologiesCardStyle } from "./style"
import sadFace from "../../assets/sadface1.png"

const TechnologiesCard = () => {
    return (
        // <div className="withoutTechnologies">
        //     <h1 className="title1">Nenhuma tecnologia cadastrada</h1>
        //     <img src={sadFace} alt="icone de rosto triste"/>
        // </div>
        <TechnologiesCardStyle>
            <li className="boxCard">
                <div>
                    <h4 className="title2">Styled-components</h4>
                    <p className="headline">intermediario</p>
                </div>
            </li>
            <li className="boxCard">
                <div>
                    <h4 className="title2">Styled-components</h4>
                    <p className="headline">intermediario</p>
                </div>
            </li>
        </TechnologiesCardStyle>
    )
}

export default TechnologiesCard