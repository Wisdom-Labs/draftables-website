import Container from "react-bootstrap/Container";
import "./styles/Footer.scss";
import linkedinLogo from "../assets/linkedin-logo.svg";
import redditLogo from "../assets/reddit-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
import mediumLogo from "../assets/medium-logo.svg";
import draftablesLogo from "../assets/footer/footer_logo.png";

function Footer() {
  return (
    <Container className="footer">
      <img alt="" src={draftablesLogo} className="footerLogo" />
      <div className="footerContent">
        <div className="footerLeft">
          <h3 className="footerHeaders"></h3>
          <li>
            <a href="#support">Our Team</a>
          </li>
        </div>
        <div className="footerMiddleLeft">
          <h3 className="footerHeaders"></h3>
          <li>
            <a href="#whatis">About Draftables</a>
          </li>
        </div>
        <div className="footerMiddle">
          <h3 className="footerHeaders"></h3>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </div>
        <div className="footerMiddleRight">
          <h3 className="footerHeaders"></h3>
          <li>
            <a href="">Blogs</a>
          </li>
        </div>
        <div className="footerRight">
          <h3 className="footerHeaders"></h3>
          <li>
            <a href="">Careers</a>
          </li>
        </div>
      </div>
      <div className="copyrightSocials">
        <div className="copyrightRight">
          <p>Copyright ©2023 All Rights Reserved | DRAFT LABS</p>
        </div>
        <div className="copyrightLeft">
          <a href="https://twitter.com/draftables" target="_blank">
            <img alt="" src={twitterLogo} className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/company/draftlabs" target="_blank">
            <img alt="" src={linkedinLogo} className="socialIcon" />
          </a>
          <a href="https://www.reddit.com/r/Draftables/" target="_blank">
            <img alt="" src={redditLogo} className="socialIcon" />
          </a>
          <a href="https://draftables.medium.com/" target="_blank">
            <img alt="" src={mediumLogo} className="socialIcon" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
