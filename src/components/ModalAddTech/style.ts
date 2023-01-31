import styled from "styled-components";

export const ModalAddTechStyle = styled.div`

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

    .titileAdd {
        width: 100%;
        height: 40px;
        background-color: var(--grey-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .titileAdd > h2 {
        padding-left: 10px;
        color: var(--grey-0);
    }

    .titileAdd > button {
        border: none;
        padding-right: 10px;
        background-color: var(--grey-2);
        color: var(--grey-1);
    }

    .titileAdd > button:hover {
        color: var(--grey-3);
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 12px 12px;
        gap: 8px;
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

    .buttonAdd {
        width: 100%;
        height: 35px;
        margin-top: 15px;
        background-color: var(--color-primary);
        color: var(--grey-0);
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttonAdd:hover {
        background-color: var(--color-primary-Focus);
        
    }

    .buttonAdd:disabled {
        background-color: var(--color-primary-Negative);
    }

    @media (min-width: 768px) {
        max-width: 400px;
    }
    
`