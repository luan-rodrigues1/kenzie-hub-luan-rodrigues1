import Header from "../../components/Header"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegistrationSchema } from "../../schemas/user.schemas";
import { IRegister } from "../../services/postRegistration";


const Registration =  () => {

    const { registerUser } = useContext(UserContext);

    const {register, handleSubmit, formState: { errors }} = useForm<IRegister>({
        resolver: yupResolver(formRegistrationSchema),
    });

    return (
        <>
            <Header nameButton="Voltar"/>
            <section>
                <h2>Crie sua conta</h2>
                <h3>Rapido e grátis, vamos nessa</h3>
                <form action="" onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                    <p className="headline">{errors.name?.message}</p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>
                    <p className="headline">{errors.email?.message}</p>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" placeholder="Digite aqui sua Senha" {...register("password")}/>
                    <p className="headline">{errors.password?.message}</p>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <input id="confirmPassword" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
                    <p className="headline">{errors.confirmPassword?.message}</p>
                    <label htmlFor="bio">Bio</label>
                    <input id="bio" type="text" placeholder="Fale sobre você" {...register("bio")}/>
                    <p className="headline">{errors.bio?.message}</p>
                    <label htmlFor="contact">Contato</label>
                    <input id="contact" type="text" placeholder="Opção de contato" {...register("contact")}/>
                    <p className="headline">{errors.contact?.message}</p>
                    <label htmlFor="module">Selecionar módulo</label>
                    <select id="module" {...register("course_module")}>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo módulo">Segundo módulo</option>
                        <option value="Terceiro módulo">Terceiro módulo</option>
                        <option value="Quarto módulo">Quarto módulo</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </>
    )
}

export default Registration