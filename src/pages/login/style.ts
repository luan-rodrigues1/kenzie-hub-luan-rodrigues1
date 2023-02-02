import styled from "styled-components";

export const LoginStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        width: 100%;
        margin: 60px 0 15px 0;
        display: flex;
        justify-content: center;
    }

    .conatinerLogin {
        width: 90%;
        max-width: 400px;
        margin: 0 auto;
        background-color: var(--grey-3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
    }

    .conatinerLogin > h2 {
        margin: 25px 0 20px 0;
        color: var(--grey-0);
    } 

    .conatinerLogin > form {
        width: 92%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .conatinerLogin > form > label {
        margin-top: 10px;
        color: var(--grey-0);
    }

    .conatinerLogin > form > input {
        height: 40px;
        margin: 10px 0 4px 0;
        background-color: var(--grey-2);
        border: none;
        border-radius: 3px;
        padding-left: 8px;
        color: var(--grey-0);
    }

    .conatinerLogin > form > div {
        width: 100%;
        height: 40px;
        margin: 10px 0 4px 0;
        background-color: var(--grey-2);
        border: none;
        border-radius: 3px;
        color: var(--grey-0);
        position: relative;
    }

    .conatinerLogin > form > div > img {
        position: absolute;
        top: 40%;
        left: 91%;
        cursor: pointer;
    }

    .conatinerLogin > form > div > input {
        width: 100%;
        background-color: var(--grey-2);
        border: none;
        border-radius: 3px;
        padding-left: 8px;
        color: var(--grey-0);
    }

    .conatinerLogin > form > p {
        color: var(--negative-feedback);
    }

    .buttonLogin {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        background-color: var(--color-primary);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        margin: 15px 0 20px 0;
    }

    .buttonLogin:hover {
        background-color: var(--color-primary-Focus);
    }

    .buttonLogin:disabled {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        background-color: var(--color-primary-Negative);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        margin: 15px 0 20px 0;
    }

    .conatinerLogin > span {
        color: var(--grey-1);
    }

    .conatinerLogin > a {
        width: 92%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto 20px auto;
        background-color: var(--grey-1);
        border-radius: 3px;
        color: var(--grey-0);
    }

    .conatinerLogin > a:hover {
        background-color: var(--grey-2);
    }

`;