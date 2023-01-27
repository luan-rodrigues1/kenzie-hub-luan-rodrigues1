import Header from "../../components/Header"
import TechnologiesList from "../../components/TechnologiesList"

const Dashboard =  () => {
    return (
        <>
            <Header nameButton="Sair"/>
            <section>
                <h2>Olá, nome do usuario</h2>
                <p>Nome do modulo que o usuario se encontra</p>
            </section>
            <TechnologiesList/>
        </>
    )
}

export default Dashboard