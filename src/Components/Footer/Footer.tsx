import "./style.css";
import { Container } from "@mantine/core";
import FacebookIcon from "../../assets/img/icon/facebook.svg";
import InstagramIcon from "../../assets/img/icon/instagram.svg";
import TwitterIcon from "../../assets/img/icon/twitter.svg";
import LogoSmall from "../../assets/img/logoWithText.svg";

function Footer() {
  return (
    <div className="footer">
      <Container size="xl">
        <div className="footer__flex">
          <img src={LogoSmall} alt="SWT token" />
          <div className="footer__icons">
            <img src={FacebookIcon} alt="facebook" />
            <img src={InstagramIcon} alt="instagram" />
            <img src={TwitterIcon} alt="twitter" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
