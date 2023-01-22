import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png"
import { UserContext } from "../../contexts/UserContext";
import { formLoginSchema } from "../../schemas/user.schemas";
import { ILogin } from "../../interfaces/user.interfaces";

const Login =  () => {

    const { loginUser } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm<ILogin>({
        resolver: yupResolver(formLoginSchema),
    });

    return (
        <main>
            <img src={Logo} alt="Logo Kenzie Hub"/>
            <section>
                <form action="" onSubmit={handleSubmit(loginUser)}>
                    <label htmlFor="emailLogin">Email</label>
                    <input id="emailLogin" type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                    <p className="headline">{errors.email?.message}</p>
                    <label htmlFor="passwordLogin">Senha</label>
                    <input id="passwordLogin" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                    <p className="headline">{errors.password?.message}</p>
                    <button>Entrar</button>
                </form>
                <span>Ainda não possui uma conta?</span>
                <button>Cadastre-se</button>
            </section>
        </main>
    )
}

export default Login