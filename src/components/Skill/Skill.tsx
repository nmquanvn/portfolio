import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Container } from "./styles";
import VTlist from "./list";
import VTcontent from "./content";
import { skillsData } from "../../constants/skills.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ReactTyped } from "react-typed";

export function Skill() {
    const [activeTabId, setActiveTabId] = useState(0);
    function btnClick(id: React.SetStateAction<number>) {
        setActiveTabId(id);
    }

    return (
        <AnimationOnScroll animateIn="flipInX" animateOnce={true}>
            <Container id="skills" className="section__Skills-container">
                    <h2>My skills</h2>
                <div className="skill-text">
                    <ReactTyped strings={["Key Strengths:"]}
                            className="skill-title" 
                            typeSpeed={60}
                            onComplete={self => self.cursor.remove()}
                            startDelay={2000}
                            cursorChar="&#9608;"
                            showCursor={true}/>
                    <ul className="skill-content">
                        {skillsData.keys.map((string, index) => (<li key={index}>{string}</li>))}
                    </ul>
                    <ReactTyped strings={["Technologies:"]}
                        className="skill-title" 
                        typeSpeed={60}
                        onComplete={self => self.cursor.remove()}
                        startDelay={2000}
                        cursorChar="&#9608;"
                        showCursor={true}/>
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
