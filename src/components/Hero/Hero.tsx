import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
//import Illustration from "../../assets/illustration.svg"
import Develop from "../../assets/develop-transparent.gif";
import { HashLink } from "react-router-hash-link";
import { ReactTyped } from "react-typed";
import React from "react";
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
                <div className="stacked">
                    {/* <div className="template">
                        <h3 className="title placeholder-title">Web Developer</h3>
                        <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;</h3> 
                        <h3 className="title placeholder-title">Application Developer</h3>                   
                    </div> */}
                    <div className="type-wrapper">
                    <ReactTyped strings={["Web Developer &nbsp;/&nbsp; Software Developer"]}
                        className="title" 
                        typeSpeed={80}
                        loop
                        backDelay={8000}
                        backSpeed={40}
                        cursorChar="&#9608;"
                        showCursor={true}/>
                    </div>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInUp"
                    animateOnce={true}
                    delay={0.6 * 1000}
                >
                    <p className="small-resume">
                        I am a passionate web developer with a good
                        foundation in creating robust, scalable, and secure web
                        applications.
                        <br/>Let's code something cool that not only work like a charm but also make users smile! 😎🚀
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
                        <a href="https://drive.google.com/file/d/1aG-neIwxtvuJWpOgf8LNUc5Oo9VmxyvR/view?usp=sharing" target="_blank" className="button button-2" rel="noreferrer">
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
