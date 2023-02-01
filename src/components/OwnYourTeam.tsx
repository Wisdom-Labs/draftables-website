import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/OwnYourTeam.scss";

function OwnYourTeam() {
  return (
    <Container className="oytContainer">
      <h1 className="oytTitle">OWN. YOUR. TEAM.</h1>
      <p className="oytDescription">
        Draftables is the most customizable, rewarding, and in-depth sports
        simulator of all time. You no longer have to pretend to be a football
        franchise owner — you are one.
      </p>
      <Container className="oytInnerContainer">
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternOyt"
        />
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternOyt2"
        />
        <div className="oytAssets">
          <img
            alt=""
            src="src\assets\ownyourteam\american_football.png"
            className="whatIsImage"
          />
          <div className="gradientBackground">
            <img
              alt=""
              src="src\assets\ownyourteam\vs.png"
              className="whatIsImage whatIsImageMain"
            />
          </div>
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_3.png"
            className="whatIsImage"
          />
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_2.png"
            className="whatIsImage"
          />
        </div>
        <div className="oytLitePaper">
          <p className="oytDescription">
            Draftables aims to fully realize the potential of sports simulators.
            Experience unlimited control, true ownership, season-to-season
            continuity, and a lively community. Draftables is a fun,
            free-to-play game that solves the issues with current sports video
            games.
          </p>
          <Button className="buttonGeneral buttonGeneralLitePaper">
            LITEPAPER
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default OwnYourTeam;