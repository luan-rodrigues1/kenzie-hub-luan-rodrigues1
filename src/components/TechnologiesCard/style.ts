import styled from "styled-components";

export const TechnologiesCardStyle = styled.ul`
    
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    background-color: var(--grey-3);
    padding: 15px 0 5px 0;

    .boxCard {
        width: 95%;
        height: 45px;
        display: flex;
        justify-content: center;
        margin: 0 auto 15px auto;
        background-color: var(--grey-4);
        border-radius: 5px;
        cursor: pointer;
    }

    .boxCard:hover {
        background-color: var(--grey-2);
    }

    .boxCard > div {
        width: 92%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .boxCard > div > h4 {
        color: var(--grey-0);
    }

    .boxCard > div > p {
        color: var(--grey-0);
    }

`