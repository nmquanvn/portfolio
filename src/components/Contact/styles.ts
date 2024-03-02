import styled from "styled-components";

export const Container = styled.section`
    margin-top: 20rem;

    header {
        text-align: center;
        h2 {
            text-align: center;
            font-size: 4rem;
        }
        p {
            color: var(--green);
            font-weight: 500;
        }
    }

    .wrap {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        place-items: center;
        margin-top: 8rem;
        flex-direction: column;
        a {
            width: 100%;
            max-width: 40rem;
            background-color: var(--main);
            border-radius: 1.4rem;
            padding: 1.6rem 2.8rem;
            transition: background-color 0.25s;
            div {
                gap: 4rem;
                color: var(--black);
                font-weight: 700;
                display: flex;
                align-items: center;
                img {
                    width: 4rem;
                    margin-left: 2rem;
                }
                p {
                    text-align: center;
                    //flex: 1;
                }
            }
            &:hover {
                background-color: var(--pink);
                a {
                    color: #fff;
                }
            }
        }
    }

    @media (max-width: 960px) {
        .contacts {
            flex-direction: column;
            a {
                width: 100%;
                flex-direction: column;
            }
        }

        .wrap {
            display: flex;
            flex-direction: column;
        }
    }
`;
