import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        text-align: center;
        font-size: 4rem;
        margin-bottom: 10rem;
    }

    .certificates:has(> :only-child) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .certificates:has(> :nth-child(2)) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
     
    .certificates:has(> :nth-child(3)) {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 50px;
    }

    .certificates {
        overflow: hidden;
        grid-gap: 50px;
        grid-auto-flow: row dense;
        padding: 1rem;

        .certificate {
            flex-grow: 1;
            padding: 2rem 1.8rem;
            background-color: var(--box);
            border-radius: 1.2rem;
            transition: 0.25s;
            display: flex;
            flex-direction: column;
            height: 400px;
            width: 400px;
            color: #fff;
            &:hover {
                transform: translateY(-5px);
                background-color: var(--pink);
            }

            header {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 3.6rem;
                a > img {
                    width: 100%;
                }
            }

            h3 {
                margin-bottom: 2rem;
            }

            p {
                letter-spacing: 0.12rem;
                margin-bottom: 2rem;
                a {
                    color: #ffff;
                    border-bottom: 1px solid var(--green);
                    transition: color 0.25s;
                    &:hover {
                        color: var(--green);
                    }
                }
            }

            footer {
                margin-top: auto;
                .tech-list {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    font-size: 1.4rem;
                    opacity: 0.6;
                }
            }
        }

        @media only screen and (max-width: 480px) {
            .certificate {
                height: 350px;
                width: 350px;
            }
        }
    }

    @media (max-width: 1530px) {
        .certificates {
            grid-template-columns: auto auto;
        }
    }

    @media (max-width: 1078px) {
        .certificates {
            display: flex;
            flex-direction: column;
            align-items: center;

        }
    }
`;
