import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { skills } from "../../constants/skills";
import { ReactTyped } from "react-typed";

export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <AnimationOnScroll animateIn="fadeInLeft" animateOnce={true}>
                    <h2>About Me</h2>
                </AnimationOnScroll>
                <div className="text-wrap">
                <ReactTyped strings={["Greetings, <br /><br /> I am Nguyen Minh Quan, a young Software Engineer with little more than 2 years of experience. <br /><br /> My proficiency extends to prominent programming languages, including Java, Python, and Golang. My professional focus lies in the meticulous design and implementation of robust solutions that align with exacting standards. <br /><br /> My experience encompasses a spectrum of responsibilities, from bug resolution to the optimization of application systems. In addition, I remain dedicated to remaining abreast of the latest technological advancements and industry best practices. <br /><br />Thank you for checking out my profile. <br /><br /> Quan Nguyen."]}
                        className="text" 
                        typeSpeed={5}
                        onComplete={(self) => {self.cursor.remove()}}
                        cursorChar="&#9608;"
                        showCursor={true}
                        />
                </div>
                <div className="skills-wrap">
                    {skills.map((skill, index) => (
                        <AnimationOnScroll
                            animateIn="fadeInUp"
                            key={index}
                            animateOnce={true}
                            delay={0.1 * index * 1000}
                        >
                            <div
                                className="skill-box block-container"
                                key={skill.name}
                            >
                                <div className="btn-back round-btn" />
                                <div className="btn-front round-btn center-btn">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                    />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    ))}
                </div>
            </div>
            <div className="about-image">
                <AnimationOnScroll
                    animateIn="fadeInRight"
                    animateOnce={true}
                    delay={0.6 * 1000}
                >
                    <img src={profileImage} alt="App" />
                </AnimationOnScroll>
            </div>
        </Container>
    );
}
