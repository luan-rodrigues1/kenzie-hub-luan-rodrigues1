import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


const Header = ({nameButton}: any) => {

    const { logoutUser } = useContext(UserContext);

    return (
        <HeaderStyle itemRef={nameButton} >
            <nav>
                <img src={Logo} alt="Logo Kenzie Hub"/>
                {nameButton !== "Sair" ?
                    <Link className="headlineBold" to="/" >{nameButton}</Link>
                    :
                    <button onClick={() => logoutUser()}>{nameButton}</button>
                }
            </nav>
        </HeaderStyle>
    )
}

export default Header