import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        text-align: center;
        font-size: 4rem;
        margin-bottom: 10rem;
    }

    .certificates {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
        grid-template-rows: auto;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        overflow: hidden;
        justify-content: center;

        .certificate {
            padding: 2rem 1.8rem;
            background-color: #2b2b2b;
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
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--blue);
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
    }
`;
