import { jobs } from "../../constants/jobs";
import { Container } from "./styles";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
    const experiences = jobs.works;
    return (
        <Container id="timeline">
            <h2>Work Places</h2>
            <div className="timeline">
                <VerticalTimeline lineColor="var(--main)">
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={experience.company_name}
                            date={experience.date}
                            iconStyle={{
                                boxShadow: "0 0 0 4px var(--main)",
                                background: experience.iconBg,
                            }}
                            icon={
                                <div className="icon">
                                    <img
                                        src={experience.icon}
                                        alt={experience.company_name}
                                    />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: "8px",
                                borderStyle: "solid",
                                borderBottomColor: experience.iconBg,
                                boxShadow: "none",
                                background: "#112240",
                                opacity: 0.8,
                            }}
                            contentArrowStyle={{ borderRight: "7px solid" }}
                            dateClassName="date"
                            iconOnClick={() =>
                                window.open(experience.company_link, "_blank")
                            }
                        >
                            <div>
                                <h3>{experience.title}</h3>
                                <p style={{ margin: 0, fontSize: "20px" }}>
                                    {experience.company_name}
                                </p>
                            </div>

                            <ul>
                                {experience.points.map((point, index) => (
                                    <li
                                        key={`experience-point-${index}`}
                                        className="detail"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                <h3 className="continue">And my journey still continues...</h3>
            </div>
        </Container>
    );
}

export default Timeline;
