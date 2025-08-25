import { Container } from "./styles";

// import reactIcon from "../../assets/react-icon.svg";
import cogwheelIcon from "../../assets/cogwheel-svgrepo-com.svg"
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
//import instagramIcon from '../../assets/instagram.png'
import faceBookIcon from "../../assets/facebook-tile.svg";
//import discordIcon from '../../assets/discord.png'

export function Footer() {
    return (
        <Container className="footer">
            <a href="/portfolio" className="logo">
                <span>P</span>
                <span>ortfolio</span>
            </a>
            <div>
                <p>
                    <img src={cogwheelIcon} alt="React" /> 
                    Stay focused, persistent and relentless
                    <img src={cogwheelIcon} alt="React" />
                </p>
            </div>

            <div className="social-media">
                <a
                    href="https://www.linkedin.com/in/quannm25"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedinIcon} alt="Linkedin" />
                </a>

                <a
                    href="https://github.com/nmquanvn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>

                <a
                    href="https://www.facebook.com/nmquan123vn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={faceBookIcon} alt="faceBookIcon" />
                </a>
            </div>
        </Container>
    );
}
