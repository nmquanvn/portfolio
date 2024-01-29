import styled from "styled-components";

export const Container = styled.section`
    padding-top: 15%;
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    background: rgba(0, 0, 0, 0);
    .hero-text {
        & > p {
            font-size: 1.8rem;
        }
        h1 {
            font-size: 7rem;
        }

        h3 {
            color: var(--green);
            margin: 1rem 0;
        }

        p.small-resume {
            margin-bottom: 5rem;
        }
    }

    .hero-buttons {
        margin-top: 5rem;
        display: flex;
        gap: 1rem;
    }

    .button {
        padding: 1.4rem 6rem;
        text-align: center;
    }

    .button-2 {
        background-color: var(--dodgerblue);
    }

    .hero-image {
        img {
            max-width: 500px;
        }
    }

    @media (max-width: 1212px) {
        display: block;
        margin-top: 15%;
        .hero-text {
            h1 {
                font-size: 5rem;
            }
        }

        .hero-image {
            display: none;
        }
    }

    @media (max-width: 600px) {
        margin-top: 25%;
    }
    @media (max-width: 480px) {
        margin-top: 35%;
    }

    @media (max-width: 480px) {
        .hero-buttons {
            flex-direction: column;
            place-items: center;
            justify-content: center;
            align-items: center;
            div {
                width: 100%;
                flex-direction: column;
            }
            .button {
                width: 100%;
            }
        }
    }
`;
