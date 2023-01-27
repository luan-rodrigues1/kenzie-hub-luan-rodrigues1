import styled from "styled-components";

export const DashboardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .containerInfoUser {
        width: 100%;
        border-bottom: solid var(--grey-3) 1.5px;
    }

    .containerInfoUser > div {
        width: 95%;
        max-width: 1000px;
        height: 120px;
        gap: 10px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .containerInfoUser > div > h2 {
        color: var(--grey-0);
    }

    .containerInfoUser > div > p {
        color: var(--grey-1);
    }

    @media (min-width: 768px) {
        .containerInfoUser > div {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

`
