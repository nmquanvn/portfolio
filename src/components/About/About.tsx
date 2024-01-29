import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { skills } from "../../constants/skills";

export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <AnimationOnScroll animateIn="fadeInLeft" animateOnce={true}>
                    <h2>About Me</h2>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInLeft"
                    animateOnce={true}
                    delay={0.3 * 1000}
                >
                    <p>
                        Hello, I'm Nguyen Minh Quan, and I'm all about making
                        cool stuff with code. I've teamed up with project
                        managers, designers, and frontend devs, getting the hang
                        of how things tick in the web development world.
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInLeft"
                    animateOnce={true}
                    delay={0.4 * 1000}
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                    <p>
                        I'm into Java and other languages, and if you've got a
                        project that needs some creative tech magic, count me
                        in!
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="fadeInLeft"
                    animateOnce={true}
                    delay={0.6 * 1000}
                >
                    <p>
                        I'm seeking an opportunity to work on challenging
                        projects that require creative solutions through the use
                        of my skills.
                    </p>
                </AnimationOnScroll>

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
