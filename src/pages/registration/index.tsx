import Header from "../../components/Header"

const Registration =  () => {
    return (
        <>
            <Header nameButton="Voltar"/>
            <section>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <form action="">
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Digite aqui seu email" />
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="Digite aqui sua Senha" />
                    <label htmlFor="">Confirmar Senha</label>
                    <input type="password" placeholder="Digite novamente sua senha" />
                    <label htmlFor="">Bio</label>
                    <input type="text" placeholder="Fale sobre você" />
                    <label htmlFor="">Contato</label>
                    <input type="text" placeholder="Opção de contato" />
                    <label htmlFor="">Selecionar módulo</label>
                    <select name="" id="">
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo módulo">Segundo módulo</option>
                        <option value="Terceiro módulo">Terceiro módulo</option>
                        <option value="Quarto módulo">Quarto módulo</option>
                    </select>
                    <button>Cadastrar</button>
                </form>
            </section>
        </>
    )
}

export default Registration