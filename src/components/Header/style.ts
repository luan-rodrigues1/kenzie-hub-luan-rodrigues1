import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 95%;
    margin: 40px auto 25px auto ;
    display: flex;
    justify-content: center;

    nav {
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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