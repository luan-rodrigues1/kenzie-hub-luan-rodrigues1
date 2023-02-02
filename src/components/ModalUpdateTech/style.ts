import styled from "styled-components";

export const ModalUpdateTechStyle = styled.div`
    ${({hidden}) => !hidden ? "display: none;" 
            : 
            `width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            background-color: var(--grey-3);
            max-width: 310px;
            position: fixed;
            top: 20%;
            right: -50%;
            left: -50%;
            margin: 0 auto;
            animation: modalAnimation 1s;`
    };
    /* width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: var(--grey-3);
    max-width: 310px;
    position: fixed;
    top: 20%;
    right: -50%;
    left: -50%;
    margin: 0 auto;
    animation: modalAnimation 1s; */

    .titileUpdate {
        width: 100%;
        height: 40px;
        background-color: var(--grey-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .titileUpdate > h2 {
        padding-left: 10px;
        color: var(--grey-0);
    }

    .titileUpdate > button {
        border: none;
        padding-right: 10px;
        background-color: var(--grey-2);
        color: var(--grey-1);
    }

    .titileUpdate > button:hover {
        color: var(--grey-3);
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 12px 12px;
        gap: 10px;
    }

    form > label {
        margin: 5px 0;
        color: var(--grey-0);
    }

    form > input {
        height: 35px;
        margin-bottom: 2px;
        color: var(--grey-0);
        border-radius: 3px;
        border: none;
        padding-left: 7px;
        background-color: var(--grey-2);
    }

    form > p {
        color: var(--negative-feedback);
        margin-bottom: 5px;
    }

    form > select {
        height: 35px;
        margin-bottom: 2px;
        color: var(--grey-0);
        border-radius: 3px;
        border: none;
        padding-left: 7px;
        background-color: var(--grey-2);
    }

    form > div {
        width: 100%;
        height: 35px;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .buttonUpdate {
        width: 65%;
        background-color: var(--color-primary);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttonUpdate:hover {
        background-color: var(--color-primary-Focus);
        
    }

    .buttonUpdate:disabled {
        background-color: var(--color-primary-Negative);
    }

    .buttonTrash {
        width: 30%;
        background-color: var(--grey-1);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttonTrash:hover {
        background-color: var(--grey-2);
    }

    .buttonTrash:disabled {
        background-color: var(--grey-2);
    }

    @media (min-width: 768px) {
        max-width: 400px;
    }
    
`
