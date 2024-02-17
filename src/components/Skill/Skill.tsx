import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "./styles";
import VTlist from "./list";
import VTcontent from "./content";
import { skillsData } from "../../constants/skills.js";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function Skill() {
    const [activeTabId, setActiveTabId] = useState(0);
    function btnClick(id: React.SetStateAction<number>) {
        setActiveTabId(id);
    }

    return (
        <AnimationOnScroll animateIn="flipInX" animateOnce={true}>
            <Container id="skills" className="section__Skills-container">
                <div className="skill-text">
                    <h2>My skills</h2>
                    <Row>
                        <Col id="col-1">
                            <div className="styledTab">
                                <ul className="styledTabList">
                                    {skillsData.fields.map(
                                        (job: any, index: any) => (
                                            <VTlist
                                                key={index}
                                                onClick={btnClick}
                                                data={job}
                                                index={index}
                                                activeTabId={activeTabId}
                                            />
                                        ),
                                    )}
                                </ul>
                            </div>
                        </Col>
                        <Col id="col-2">
                            {skillsData.fields.map((job: any, index: any) => (
                                <VTcontent
                                    data={job}
                                    key={index}
                                    index={index}
                                    activeTabId={activeTabId}
                                />
                            ))}
                        </Col>
                    </Row>
                    <span
                        className={
                            activeTabId === 0
                                ? "index1-chosen"
                                : activeTabId === 1
                                  ? "index2-chosen"
                                  : "index3-chosen"
                        }
                    >
                        &nbsp;
                    </span>
                </div>
            </Container>
        </AnimationOnScroll>
    );
}
