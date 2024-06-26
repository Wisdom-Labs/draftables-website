import Container from "react-bootstrap/Container";
import "./styles/Footer.scss";
import mediumLogo from "../assets/medium-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
import draftablesLogo from "../assets/footer/footer_logo.png";
import discordLogo from "../assets/discord-logo.svg";
import {Tooltip} from "react-tooltip";

function Footer() {
  return (
      <Container className="footer">
        <img alt="" src={draftablesLogo} className="footerLogo"/>
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
            <a href="https://medium.com/@DraftablesFootball" target="_blank">Blogs</a>
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
          <p>Copyright ©2024 All Rights Reserved | DRAFT LABS, INC.</p>
        </div>
        <div className="copyrightLeft">
          <a href="https://twitter.com/draftables" target="_blank">
            <img alt="" src={twitterLogo} className="socialIcon"/>
          </a>
          <a href="https://discord.gg/V25JWp5Jp5" target="_blank">
            <img alt="" src={discordLogo} className="socialIcon"/>
          </a>
          <a href="https://medium.com/@DraftablesFootball" target="_blank">
            <img alt="" src={mediumLogo} className="socialIcon"/>
          </a>
          {/*<a href="https://www.reddit.com/r/Draftables/" target="_blank">
            <img alt="" src={redditLogo} className="socialIcon" />
          </a>
          <a href="https://draftables.medium.com/" target="_blank">
            <img alt="" src={mediumLogo} className="socialIcon" />
          </a>*/}
        </div>
      </div>
    </Container>
  );
}

export default Footer;
