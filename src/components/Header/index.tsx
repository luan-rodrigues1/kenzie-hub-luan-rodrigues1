import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"


const Header = ({nameButton}: any) => {
    console.log(nameButton)
    return (
        <HeaderStyle itemRef={nameButton} >
            <nav>
                <img src={Logo} alt="Logo Kenzie Hub"/>
                <Link className="headlineBold" to="/" >{nameButton}</Link>
            </nav>
        </HeaderStyle>
    )
}

export default Header