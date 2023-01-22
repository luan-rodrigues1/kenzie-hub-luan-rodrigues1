import Logo from "../../assets/Logo.png"

const Login =  () => {
    return (
        <main>
            <img src={Logo} alt="Logo Kenzie Hub"/>
            <section>
                <form action="">
                    <label htmlFor="emailLogin">Email</label>
                    <input id="emailLogin" type="text" placeholder="Digite aqui seu email"/>
                    <label htmlFor="passwordLogin">Senha</label>
                    <input id="passwordLogin" type="password" placeholder="Digite aqui sua senha"/>
                    <button>Entrar</button>
                </form>
                <span>Ainda não possui uma conta?</span>
                <button>Cadastre-se</button>
            </section>
        </main>
    )
}

export default Login