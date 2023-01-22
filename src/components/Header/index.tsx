import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"

const Header = ({nameButton}: any) => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo Kenzie Hub"/>
                <Link to={nameButton === "Voltar" ? "/" : "/dashboard"}>{nameButton}</Link>
            </nav>
        </header>
    )
}

export default Header