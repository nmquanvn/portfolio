import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import { useMode } from "../Mode/Mode";
export function Header() {
    const [isActive, setActive] = useState(false);

    const { theme, toggleLightDarkTheme } = useMode();

    function toggleTheme() {
        // let html = document.getElementsByTagName("html")[0];
        // html.classList.toggle("light");
        toggleLightDarkTheme();
    }

    function closeMenu() {
        setActive(false);
    }

    return (
        <Container className="header-fixed">
            <Router>
                <HashLink smooth to="#home" className="logo">
                    <span className="first-word">Quan</span>
                    <span>Nguyen</span>
                </HashLink>

                <input
                    onChange={toggleTheme}
                    className="container_toggle"
                    type="checkbox"
                    id="switch"
                    name="mode"
                    checked={theme === "light" ? true : false}
                />
                <label htmlFor="switch">Toggle</label>

                <nav className={isActive ? "active" : ""}>
                    <HashLink smooth to="#home" onClick={closeMenu}>
                        Home
                    </HashLink>
                    <HashLink smooth to="#skills" onClick={closeMenu}>
                        Skills
                    </HashLink>
                    <HashLink smooth to="#about" onClick={closeMenu}>
                        About
                    </HashLink>
                    <HashLink smooth to="#certificate" onClick={closeMenu}>
                        Certificates
                    </HashLink>
                    <HashLink smooth to="#projects" onClick={closeMenu}>
                        Projects
                    </HashLink>
                    <HashLink smooth to="#contact" onClick={closeMenu}>
                        Contact
                    </HashLink>
                    <a
                        href="https://drive.google.com/file/d/1aG-neIwxtvuJWpOgf8LNUc5Oo9VmxyvR/view?usp=sharing"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                    >
                        CV
                    </a>
                </nav>

                <div
                    aria-expanded={isActive ? "true" : "false"}
                    aria-haspopup="true"
                    aria-label={isActive ? "close menu" : "open menu"}
                    className={isActive ? "menu active" : "menu"}
                    onClick={() => {
                        setActive(!isActive);
                    }}
                ></div>
            </Router>
        </Container>
    );
}
