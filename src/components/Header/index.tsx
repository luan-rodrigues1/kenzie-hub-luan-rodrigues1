import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"

const Header = ({nameButton}: any) => {
    return (
        <HeaderStyle>
            <nav>
                <img src={Logo} alt="Logo Kenzie Hub"/>
                <Link className="headlineBold" to={nameButton === "Voltar" ? "/" : "/dashboard"}>{nameButton}</Link>
            </nav>
        </HeaderStyle>
    )
}

export default Header