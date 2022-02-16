import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import htmlLogo from "../images/html5.svg";
import cssLogo from "../images/css3.svg";
import javascriptLogo from "../images/javascript.svg";
import reactLogo from "../images/reactjs.svg";
import gitLogo from "../images/git.svg";

const Container = styled.div`
  background-color: black;
  height: 86vh;
  width: 100%;
  max-width: 100vw;
  position: absolute;
  top: 100vh;

  p {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
      "Times New Roman", serif;
    padding: 3vh 0 0 5vw;
  }

  .minor {
    width: 100%;
    font-size: 20px;
  }

  .major {
    width: 100%;
    font-size: 42px;
    font-weight: bold;
    text-shadow: 1px 2px #03989e;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
  margin-top: 24px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  img {
    width: 100px;
  }
`;

const Skills = () => {
  AOS.init();
  return (
    <Container id="skills">
      <p className="major">Meus conhecimentos</p>
      <p className="minor"> Clique nos cards para mais informações.</p>
      <CardContainer>
        <Card>
          <img src={htmlLogo} alt="Logo HTML5" />
        </Card>

        <Card>
          <img src={cssLogo} alt="Logo CSS3" />
        </Card>

        <Card>
          <img src={javascriptLogo} alt="Logo Javascript" />
        </Card>

        <Card>
          <img src={reactLogo} alt="Logo React" />
        </Card>

        <Card>
          <img src={gitLogo} alt="Logo Git" />
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Skills;
