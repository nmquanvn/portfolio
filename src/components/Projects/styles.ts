import styled from "styled-components";
export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        text-align: center;
        font-size: 4rem;
        margin-bottom: 10rem;
    }
`;

export const StyledProjectsGrid = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    a {
        position: relative;
        z-index: 1;
    }
`;

export const StyledProject = styled.li`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media (max-width: 768px) {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: var(--transition);

        &:hover,
        &:focus-visible {
            box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }
    }

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }
            @media (max-width: 768px) {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
                text-align: left;
            }
            @media (max-width: 480px) {
                padding: 25px 25px 20px;
            }
        }
        .project-tech-list {
            justify-content: flex-end;

            @media (max-width: 768px) {
                justify-content: flex-start;
            }

            li {
                margin: 0 0 5px 20px;

                @media (max-width: 768px) {
                    margin: 0 10px 5px 0;
                }
            }
        }
        .project-links {
            justify-content: flex-end;
            margin-left: 0;
            margin-right: -10px;

            @media (max-width: 768px) {
                justify-content: flex-start;
                margin-left: -10px;
                margin-right: 0;
            }
        }
        .project-image {
            grid-column: 1 / 8;

            @media (max-width: 768px) {
                grid-column: 1 / -1;
            }
        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;

        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            grid-column: 1 / -1;
            padding: 40px 40px 30px;
            z-index: 5;
        }

        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }
    }

    .project-overline {
        margin: 10px 0;
        color: var(--main);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        font-weight: 400;
    }

    .project-title {
        color: var(--project-title);
        font-size: clamp(24px, 5vw, 28px);

        @media (min-width: 768px) {
            margin: 0 0 20px;
        }

        @media (max-width: 768px) {
            color: var(--white);

            a {
                position: static;

                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
        }
    }

    .project-description {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: var(--transition);

        &:hover,
        &:focus-visible {
            box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }
        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: var(--border-radius);
        background-color: var(--light-navy);
        color: var(--project-title);
        font-size: var(--fz-lg);

        @media (max-width: 768px) {
            padding: 20px 0;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }

        a {
            display: inline-block;
            position: relative;
            color: var(--main);
            transition: var(--transition);

            &:hover,
            &:focus-visible {
                color: var(--main);
                outline: 0;
                &:after {
                    width: 100%;
                }
                & > * {
                    color: var(--main) !important;
                    transition: var(--transition);
                }
            }
            &:after {
                content: "";
                display: block;
                width: 0;
                height: 2px;
                position: relative;
                bottom: 0.2em;
                background-color: var(--main);
                opacity: 0.5;
                @media (prefers-reduced-motion: no-preference) {
                    transition: var(--transition);
                }
            }
        }

        strong {
            color: var(--white);
            font-weight: normal;
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;

        li {
            margin: 0 20px 5px 0;
            color: var(--light-slate);
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            margin: 10px 0;

            li {
                margin: 0 10px 5px 0;
                color: var(--project-skills);
            }
        }
    }

    .project-links {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        color: var(--project-skills);

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            margin: 0 10px;
            background-color: var(--main);
            &.external {
                svg {
                    width: 22px;
                    height: 22px;
                    margin-top: -4px;
                }
            }

            img {
                width: 20px;
                height: 20px;
            }
            &:hover {
                background-color: var(--pink);
            }
        }

        .cta {
            color: var(--main);
            background-color: transparent;
            border: 1px solid var(--main);
            border-radius: var(--border-radius);
            padding: 0.75rem 1rem;
            font-size: var(--fz-xs);
            font-family: var(--font-mono);
            line-height: 1;
            text-decoration: none;
            transition: var(--transition);

            &:hover,
            &:focus-visible {
                outline: none;
                box-shadow: 3px 3px 0 0 var(--main);
                transform: translate(-4px, -4px);
            }
            &:after {
                display: none !important;
            }

            margin: 10px;
        }
    }

    .project-image {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: var(--transition);

        &:hover,
        &:focus-visible {
            box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            height: 100%;
            opacity: 0.25;
        }

        a {
            width: 100%;
            height: 100%;
            background-color: var(--main);
            border-radius: var(--border-radius);
            vertical-align: middle;

            &:hover,
            &:focus {
                background: transparent;
                outline: 0;

                &:before,
                .img {
                    background: transparent;
                    filter: none;
                }
            }

            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 3;
                transition: var(--transition);
                background-color: var(--navy);
                mix-blend-mode: screen;
            }
        }

        .img {
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            max-width: 100%;
            filter: grayscale(100%) contrast(1) brightness(90%);

            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
                filter: grayscale(100%) contrast(1) brightness(50%);
            }
        }
    }
`;
