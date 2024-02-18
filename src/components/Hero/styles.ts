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

        .title {
            color: var(--main);
            font-weight: 800;
            font-size: 2rem;
            margin: 1rem 0;
        }

        .template {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
        }

        .placeholder-title {
            display: flex;
            visibility: hidden;
        }

        .type-wrapper {
            display: flex;
            top: 0;
            left: 0;
        }

        .stacked {
            position: relative;
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
        &:hover {
            background-color: var(--pink);
            a {
                color: #fff;
            }
        }
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
