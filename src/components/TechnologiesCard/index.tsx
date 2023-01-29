import { TechnologiesCardStyle } from "./style"
import sadFace from "../../assets/sadface1.png"
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

const TechnologiesCard = () => {

    const { techsUser } = useContext(UserContext);
    const { setUpdateAdd } = useContext(TechContext);

    return (
        // <div className="withoutTechnologies">
        //         <h1 className="title1">Nenhuma tecnologia cadastrada</h1>
        //         <img src={sadFace} alt="icone de rosto triste"/>
        //     </div>
        <>
            {techsUser[0] === undefined ?
            <div className="withoutTechnologies">
                <h1 className="title1">Nenhuma tecnologia cadastrada</h1>
                <img src={sadFace} alt="icone de rosto triste"/>
            </div>
        :
            <TechnologiesCardStyle>
                {techsUser.map(el => {
                    return (
                        <li key={el.id} onClick={() => setUpdateAdd(true)} className="boxCard">
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