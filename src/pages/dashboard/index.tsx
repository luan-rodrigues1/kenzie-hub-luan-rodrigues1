import Header from "../../components/Header"
import ModalAddTech from "../../components/ModalAddTech"
import TechnologiesList from "../../components/TechnologiesList"
import { DashboardStyle } from "../../pages/dashboard/style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import ModalUpdateTech from "../../components/ModalUpdateTech"

const Dashboard =  () => {
    const { isLogged } = useContext(UserContext);

    return (
        <>
            <DashboardStyle>
                <Header nameButton="Sair"/>
                <section className="containerInfoUser">
                    <div>
                        <h2 className="title1">Olá, {isLogged?.name}</h2>
                        <p className="headline">{isLogged?.course_module}</p>
                    </div>
                </section>
                <TechnologiesList/>
            </DashboardStyle>
            <ModalAddTech/>
            <ModalUpdateTech/>
        </>
    )
}

export default Dashboard