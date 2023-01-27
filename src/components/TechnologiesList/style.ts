import styled from "styled-components";

export const TechnologiesListStyle = styled.section`
    
    width: 100%;

    .boxInfoList {
        width: 95%;
        max-width: 1000px;
        margin: 0 auto 20px auto;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
    }

    .boxInfoList > h3 {
        color: var(--grey-0);
    }

    .boxInfoList > button {
        width: 35px;
        height: 25px;
        background-color: var(--grey-3);
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .withoutTechnologies {
        width: 95%;
        height: 80px;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .withoutTechnologies > h1 {
        color: var(--grey-0);
    } 

`