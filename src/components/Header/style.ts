import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: ${({itemRef}) => itemRef === "Sair" ? "20px auto 0 auto" : "40px auto 25px auto"};
    padding-bottom: ${({itemRef}) => itemRef === "Sair" ? "30px" : "0"};;
    border-bottom: ${({itemRef}) => itemRef === "Sair" ? "solid var(--grey-3) 1.5px" : "none"};

    nav {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: ${({itemRef}) => itemRef === "Sair" ? "1000px" : "400px"};
    }

    nav > a {
        width: 70px;
        height: 35px;
        background-color: var(--grey-3);
        color: var(--grey-0);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
    }

    nav > a:hover {
        background-color: var(--grey-2);
    }
    
`;