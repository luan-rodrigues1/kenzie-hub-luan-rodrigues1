import styled from "styled-components";

export const RegisterStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .conatinerRegistration {
        width: 95%;
        max-width: 400px;
        margin: 0 auto;
        background-color: var(--grey-3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    .conatinerRegistration > h2 {
        color: var(--grey-0);
        margin-top: 30px;
        margin-bottom: 15px;
    }

    .conatinerRegistration > h3 {
        color: var(--grey-1);
        margin-bottom: 10px;
    }

    .conatinerRegistration > form {
        width: 92%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .conatinerRegistration > form > label {
        margin-top: 10px;
        color: var(--grey-0);
    }

    .conatinerRegistration > form > input {
        height: 40px;
        margin: 10px 0 4px 0;
        background-color: var(--grey-2);
        border: none;
        border-radius: 3px;
        padding-left: 8px;
        color: var(--grey-0);
    }

    .conatinerRegistration > form > select {
        height: 40px;
        margin: 10px 0 4px 0;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        padding-left:  8px;
    }

    .conatinerRegistration > form > p {
        color: var(--negative-feedback);
    }

    .conatinerRegistration > form > button {
        height: 45px;
        background-color: var(--color-primary);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        margin: 20px 0 20px 0;
    }

    .conatinerRegistration > form > button:hover {
        background-color: var(--color-primary-Focus);
    }


`;