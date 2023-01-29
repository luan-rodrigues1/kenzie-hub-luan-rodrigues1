import Header from "../../components/Header"
import ModalAddTech from "../../components/ModalAddTech"
import TechnologiesList from "../../components/TechnologiesList"
import ModalUpdateTech from "../../components/ModalUpdateTech"
import { DashboardStyle } from "../../pages/dashboard/style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const Dashboard =  () => {

    return (
        <>
            <DashboardStyle>
                <Header nameButton="Sair"/>
                <section className="containerInfoUser">
                    <div>
                        <h2 className="title1">Olá, nome do usuario</h2>
                        <p className="headline">Nome do modulo que o usuario se encontra</p>
                    </div>
                </section>
                <TechnologiesList/>
            </DashboardStyle>
            {/* <ModalAddTech/> */}
            <ModalUpdateTech/>
        </>
    )
}

export default Dashboard