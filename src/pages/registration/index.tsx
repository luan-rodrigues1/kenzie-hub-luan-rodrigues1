import Header from "../../components/Header"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegistrationSchema } from "../../schemas/user.schemas";
import { IRegister } from "../../interfaces/user.interfaces";
import { RegisterStyle } from "./style";
import openEye from "../../assets/openeye1.png"


const Registration =  () => {

    const { registerUser, registrationVisibility, confirmVisibility, visibilitySwitch } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm<IRegister>({
        resolver: yupResolver(formRegistrationSchema),
    });

    return (
        <RegisterStyle>
            <Header nameButton="Voltar"/>
            <section className="conatinerRegistration">
                <h2 className="title2">Crie sua conta</h2>
                <h3 className="HeadlineItalic">Rapido e grátis, vamos nessa!</h3>
                <form action="" onSubmit={handleSubmit(registerUser)}>
                    <label className="headline" htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                    <p className="headline">{errors.name?.message}</p>
                    <label className="headline" htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                    <p className="headline">{errors.email?.message}</p>
                    <label className="headline" htmlFor="password">Senha</label>
                    <div>
                        <input className="inputDiv" id="password" type={registrationVisibility ? "text" : "password" } placeholder="Digite aqui sua Senha" {...register("password")}/>
                        <img onClick={()=> visibilitySwitch("registration")} src={openEye} alt="botão de visibilidade da senha" />
                    </div>
                    <p className="headline">{errors.password?.message}</p>
                    <label className="headline"  htmlFor="confirmPassword">Confirmar Senha</label>
                    <div>
                        <input className="inputDiv" id="confirmPassword" type={confirmVisibility ? "text" : "password" } placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
                        <img onClick={()=> visibilitySwitch("confirm")} src={openEye} alt="botão de visibilidade da senha" />
                    </div>
                    <p className="headline">{errors.confirmPassword?.message}</p>
                    <label className="headline"  htmlFor="bio">Bio</label>
                    <input id="bio" type="text" placeholder="Fale sobre você" {...register("bio")}/>
                    <p className="headline">{errors.bio?.message}</p>
                    <label className="headline"  htmlFor="contact">Contato</label>
                    <input id="contact" type="text" placeholder="Opção de contato" {...register("contact")}/>
                    <p className="headline">{errors.contact?.message}</p>
                    <label className="headline"  htmlFor="module">Selecionar módulo</label>
                    <select id="module" {...register("course_module")}>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo módulo">Segundo módulo</option>
                        <option value="Terceiro módulo">Terceiro módulo</option>
                        <option value="Quarto módulo">Quarto módulo</option>
                    </select>
                    <button className="title2" type="submit">Cadastrar</button>
                </form>
            </section>
        </RegisterStyle>
    )
}

export default Registration