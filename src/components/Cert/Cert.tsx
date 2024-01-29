import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
import istqbIcon from "../../assets/istqb.svg";

export function Cert() {
    return (
        <Container id="certificate">
            <h2>Certificates</h2>

            <div className="certificates">
                <AnimationOnScroll animateIn="flipInX" animateOnce={true}>
                    <div className="certificate">
                        <header>
                            <a
                                href="http://scr.istqb.org/?name=Nguy%C3%AA%CC%83n+Minh+Qu%C3%A2n&number=vtb-fl-20230237&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country="
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={istqbIcon} alt="ISTQB" />
                            </a>
                        </header>
                    </div>
                </AnimationOnScroll>

                {/* <AnimationOnScroll animateIn="flipInX">
        <div className="certificate">
          <header>
            <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/?nc1=h_ls" target="_blank">
              <img src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="AWS SAA" />
            </a>
          </header>
        </div>
      </AnimationOnScroll> */}
            </div>
        </Container>
    );
}
