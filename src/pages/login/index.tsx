import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png"
import { UserContext } from "../../contexts/UserContext";
import { formLoginSchema } from "../../schemas/user.schemas";
import { ILogin } from "../../interfaces/user.interfaces";
import { Link } from "react-router-dom";
import { LoginStyle } from "./style";
import openEye from "../../assets/openeye1.png"

const Login =  () => {

    const { loginUser, loginVisibility, visibilitySwitch } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm<ILogin>({
        resolver: yupResolver(formLoginSchema),
    });

    return (
        <LoginStyle>
            <div>
                <img src={Logo} alt="Logo Kenzie Hub"/>
            </div>
            <section className="conatinerLogin">
                <h2 className="title2">Login</h2>
                <form action="" onSubmit={handleSubmit(loginUser)}>
                    <label className="headline" htmlFor="emailLogin">Email</label>
                    <input id="emailLogin" type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                    <p className="headline">{errors.email?.message}</p>
                    <label className="headline" htmlFor="passwordLogin">Senha</label>
                    <div>
                        <input id="passwordLogin" type={loginVisibility ? "text" : "password" } placeholder="Digite aqui sua senha" {...register("password")}/>
                        <img onClick={()=> visibilitySwitch("login")} src={openEye} alt="botão de visibilidade da senha" />
                    </div>
                    <p className="headline">{errors.password?.message}</p>
                    <button className="title2">Entrar</button>
                </form>
                <span className="HeadlineItalic">Ainda não possui uma conta?</span>
                <Link className="title2" to={"/registration"}>Cadastre-se</Link>
            </section>
        </LoginStyle>
    )
}

export default Login