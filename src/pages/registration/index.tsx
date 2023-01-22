import Header from "../../components/Header"

const Registration =  () => {
    return (
        <>
            <Header nameButton="Voltar"/>
            <section>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <form action="">
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Digite aqui seu nome" />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Digite aqui seu email" />
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder="Digite aqui sua Senha" />
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <input id="confirmPassword" type="password" placeholder="Digite novamente sua senha" />
                    <label htmlFor="bio">Bio</label>
                    <input id="bio" type="text" placeholder="Fale sobre você" />
                    <label htmlFor="contact">Contato</label>
                    <input id="contact" type="text" placeholder="Opção de contato" />
                    <label htmlFor="module">Selecionar módulo</label>
                    <select name="" id="module">
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