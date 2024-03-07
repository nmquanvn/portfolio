import styled from "styled-components";

export const Container = styled.section`
    margin-top: 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    h2 {
        display: inline-block;
        margin-bottom: 2rem;
        border-bottom: 0.2rem solid var(--blue);
    }

    h3 {
        margin-top: 2rem;
        color: var(--green);
    }

    .text-wrap {
        height: 420px;
    }

    p, .text {
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
        font-weight: 500;
    }

    .skills-wrap {
        margin-top: 4rem;
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;

        img {
            object-fit: contain;
            width: 80%;
            height: 80%;
        }
    }

    .skill-box {
        width: 5rem;
        height: 5rem;
    }

    .round-btn {
        border-radius: 0.75rem;
    }

    .center-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .block-container {
        position: relative;
        transition: 250ms;
        perspective: 500px;
    }

    .block-container .btn-back {
        position: absolute;
        inset: 0;
        z-index: -1;
        width: inherit;
        height: inherit;
        transition: 250ms;
        transform-style: preserve-3d;
        transform-origin: bottom right;
        transform: rotateZ(15deg);
        will-change: transform;
        box-shadow: 16px 0 40px #444444;
    }

    .block-container .btn-back-red {
        background: linear-gradient(135deg, #ff4b1f -20%, #ff9068 120%);
    }

    .block-container .btn-back-green {
        background: linear-gradient(135deg, #adfda2 -20%, #11d3f3 120%);
    }

    .block-container .btn-back-yellow {
        background: linear-gradient(135deg, #f7971e -20%, #ffd200 120%);
    }

    .block-container .btn-back-blue {
        background: linear-gradient(135deg, #0061ff -20%, #60efff 120%);
    }

    .block-container .btn-back-orange {
        background: linear-gradient(135deg, #ff0f7b -20%, #f89b29 120%);
    }

    .block-container .btn-back-pink {
        background: linear-gradient(135deg, #e81cff -20%, #40c9ff 120%);
    }

    .block-container .btn-back-black {
        background: linear-gradient(135deg, #0a1647 -20%, #e4e7e4 120%);
    }

    .block-container .btn-front {
        position: absolute;
        inset: 0;
        z-index: 1;
        width: inherit;
        height: inherit;
        opacity: 0.9;
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        transition: 250ms;
        transform-style: preserve-3d;
        transform-origin: top left;
        overflow: hidden;
    }

    .block-container:hover > .btn-back {
        transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg)
            rotateY(-20deg);
    }

    .block-container:hover > .btn-front {
        transform: translateZ(80px) translateY(-5px) rotateX(15deg)
            rotateY(15deg);
    }

    .about-image {
        text-align: center;
        img {
            margin-top: 2rem;
            width: 100%;
            filter: grayscale(1);
            transition: filter 0.5s;
            &:hover {
                filter: grayscale(0);
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .about-image {
            max-width: 100%;
            margin-top: 4rem;
        }
        .text-wrap {
            height: 600px;
        }
    }

    @media (max-width: 1360px) {
        display: block;

        .about-image {
            display: flex;
        }
        .hard-skills {
            justify-content: center;
        }
        .soft-skills {
            justify-content: center;
        }
    }

    @media (max-width: 960px) {
        text-align: center;
    }
`;
