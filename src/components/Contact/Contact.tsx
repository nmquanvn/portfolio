import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import skypeIcon from "../../assets/skype-icon.svg";
import { openForJobs } from "../../constants/open";
import { Form } from "../Form/Form";

export function Contact() {
    return (
        <Container id="contact">
            <header>
                <h2>Feel free to contact me</h2>
                <p style={{ color: "var(--pink)", fontWeight: 700 }}>
                    {openForJobs
                        ? "I’m currently looking for new job opportunities"
                        : "Sorry, I’m not currently looking for any new opportunities right now"}
                </p>
            </header>
            <div className="wrap">
                <div className="contacts">
                    <a href="https://www.facebook.com/nmquan123vn">
                        <div>
                            <img src={facebookIcon} alt="Email" />
                            Facebook
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/quannm25">
                        <div>
                            <img src={linkedinIcon} alt="Email" />
                            LinkedIn
                        </div>
                    </a>
                    <a href="https://join.skype.com/invite/x2xDbRcsSCCK">
                        <div>
                            <img src={skypeIcon} alt="Email" />
                            Skype
                        </div>
                    </a>
                    <a href="mailto:quan.styx@gmail.com">
                        <div>
                            <img src={emailIcon} alt="Email" />
                            quan.styx@gmail.com
                        </div>
                    </a>
                    <a href="tel:+840906903819">
                        <div>
                            <img src={phoneIcon} alt="Email" />
                            (84) 090-690-3819
                        </div>
                    </a>
                </div>
                <Form></Form>
            </div>
        </Container>
    );
}
