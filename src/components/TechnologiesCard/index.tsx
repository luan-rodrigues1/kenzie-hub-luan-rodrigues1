import { TechnologiesCardStyle } from "./style"
import sadFace from "../../assets/sadface1.png"
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

const TechnologiesCard = () => {

    const { isLogged } = useContext(UserContext);
    const { setUpdateAdd, setSelectTechId, setNameUpdateTech } = useContext(TechContext);

    return (
        <>
            {isLogged?.techs[0] === undefined ?
            <div className="withoutTechnologies">
                <h1 className="title1">Nenhuma tecnologia cadastrada</h1>
                <img src={sadFace} alt="icone de rosto triste"/>
            </div>
        :
            <TechnologiesCardStyle >
                {isLogged?.techs.map(el => {
                    return (
                            <li key={el.id} onClick={() =>{return (setUpdateAdd(true), setSelectTechId(el.id), setNameUpdateTech(el.title))}} className="boxCard">
                                <div>
                                    <h4 className="title2">{el.title}</h4>
                                    <p className="headline">{el.status}</p>
                                </div>
                            </li>
                        )
                })}
            </TechnologiesCardStyle>
        }
        </>
    )
}

export default TechnologiesCard