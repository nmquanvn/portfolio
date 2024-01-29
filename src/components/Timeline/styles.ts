import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        text-align: center;
        font-size: 4rem;
        margin-bottom: 10rem;
    }

    h3 {
        color: var(--green);
        margin: 1rem 0;
    }

    p {
        color: var(--pink);
    }

    ul {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style-type: none;
    }

    li {
        color: #ffff;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    img {
        object-fit: contain;
        width: 60%;
        height: 60%;
    }

    .detail::before {
        content: "▹";
        position: relative;
        left: 0px;
        color: #64ffda;
        display: inline-block;
        margin-left: -1em;
    }

    .date {
        font-size: 1.5rem !important;
    }

    .continue {
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
