import Logo from "../../assets/Logo.png"

const Header = ({nameButton}: any) => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo Kenzie Hub"/>
                <button>{nameButton}</button>
            </nav>
        </header>
    )
}

export default Header