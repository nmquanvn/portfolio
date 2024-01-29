import { Container, StyledProjectsGrid, StyledProject } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import projects from "../../constants/projects.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LinkConverter } from "./LinkConverter";
const Projects = () => {
    const data = projects;
    const featuredProjects = data.featured;

    return (
        <Container id="projects" className="section__Skills-container">
            <h2>Things I’ve Built</h2>
            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
                <section id="projects">
                    <StyledProjectsGrid>
                        {featuredProjects &&
                            featuredProjects.map((project: any, index: any) => {
                                const {
                                    external,
                                    title,
                                    tech,
                                    github,
                                    cta,
                                    image,
                                    info,
                                } = project;

                                return (
                                    <StyledProject key={index}>
                                        <div className="project-content">
                                            <div>
                                                <p className="project-overline">
                                                    Featured Project
                                                </p>

                                                <h3 className="project-title">
                                                    {title}
                                                </h3>

                                                <div className="project-description">
                                                    {" "}
                                                    <LinkConverter
                                                        text={info}
                                                    />
                                                </div>

                                                {tech.length && (
                                                    <ul className="project-tech-list">
                                                        {tech.map(
                                                            (
                                                                tech: any,
                                                                index: any,
                                                            ) => (
                                                                <li key={index}>
                                                                    {tech}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}

                                                <div className="project-links">
                                                    {cta && (
                                                        <a
                                                            href={cta}
                                                            aria-label="Course Link"
                                                            className="cta"
                                                        >
                                                            Learn More
                                                        </a>
                                                    )}
                                                    {github && (
                                                        <a
                                                            href={github}
                                                            aria-label="GitHub Link"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={githubIcon}
                                                                alt="GitHub"
                                                            />
                                                        </a>
                                                    )}
                                                    {external && !cta && (
                                                        <a
                                                            href={external}
                                                            aria-label="External Link"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="external"
                                                        >
                                                            <img
                                                                src={
                                                                    externalLinkIcon
                                                                }
                                                                alt="GitHub"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="project-image">
                                            <a
                                                href={
                                                    external
                                                        ? external
                                                        : github
                                                          ? github
                                                          : "#"
                                                }
                                            >
                                                <img
                                                    src={image}
                                                    alt={title}
                                                    className="img"
                                                />
                                            </a>
                                        </div>
                                    </StyledProject>
                                );
                            })}
                    </StyledProjectsGrid>
                </section>
            </AnimationOnScroll>
        </Container>
    );
};

export default Projects;
