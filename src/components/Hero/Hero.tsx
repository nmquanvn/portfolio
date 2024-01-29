import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
//import Illustration from "../../assets/illustration.svg"
import Develop from "../../assets/develop-transparent.gif";
import { HashLink } from "react-router-hash-link";
import { cv } from "../../constants/open";
export function Hero() {
    return (
        <Container id="home">
            <div className="hero-text">
                <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
                    <p>Hello 👋, i am</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="fadeInUp" delay={0.2 * 1000}>
                    <h1>Quan Nguyen</h1>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInUp"
                    animateOnce={true}
                    delay={0.4 * 1000}
                >
                    <h3>Backend/ Software Developer</h3>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInUp"
                    animateOnce={true}
                    delay={0.6 * 1000}
                >
                    <p className="small-resume">
                        I am a passionate backend web developer with a good
                        foundation in creating robust, scalable, and secure web
                        applications using Java and Spring Boot.
                    </p>
                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn="fadeInUp"
                    animateOnce={true}
                    delay={0.8 * 1000}
                >
                    <div className="hero-buttons">
                        <BrowserRouter>
                            <HashLink smooth to="#contact" className="button">
                                Contact
                            </HashLink>
                        </BrowserRouter>
                        <a href={cv} download className="button button-2">
                            Get my CV
                        </a>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className="hero-image">
                <AnimationOnScroll
                    animateIn="fadeInRight"
                    animateOnce={true}
                    delay={1 * 1000}
                >
                    <img src={Develop} alt="Illustration" />
                </AnimationOnScroll>
            </div>
        </Container>
    );
}
