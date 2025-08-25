import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { skills } from "../../constants/skills";
import { ReactTyped } from "react-typed";
const intro = `
Hi,<br/><br/>
I’m Quan Nguyen, a Software Engineer with 3+ years of experience.<br/>
I work with Java, Python, Golang, and JavaScript to build reliable and scalable applications.<br/><br/>
My work includes fixing bugs, improving performance, and creating solutions that make systems run smoothly.<br/><br/>
I’ve worked on both backend and frontend, so I understand how to deliver complete applications that balance strong functionality with a good user experience.<br/><br/>
I enjoy learning new technologies and keeping up with industry best practices to keep improving my skills.<br/><br/>
Thanks for checking out my profile!
`;
export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <AnimationOnScroll animateIn="fadeInLeft" animateOnce={true}>
                    <h2>About Me</h2>
                </AnimationOnScroll>
                <div className="text-wrap">
                <ReactTyped strings={[intro]}
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
