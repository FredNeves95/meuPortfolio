import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import htmlLogo from "../images/html5.svg";
import cssLogo from "../images/css3.svg";
import javascriptLogo from "../images/javascript.svg";
import reactLogo from "../images/reactjs.svg";
import gitLogo from "../images/git.svg";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

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
  margin-top: 10vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0px 16px;
  img {
    width: 100px;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  background-color: black;
  color: white;
  border: 1px solid #03989e;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 80vw;
  max-width: 500px;
  max-height: 400px;
  img {
    width: 60px;
    align-self: center;
  }

  p {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
      "Times New Roman", serif;
    margin: 0 0 8px 0;
  }

  .major {
    font-size: 42px;
    font-weight: bold;
    text-shadow: 1px 2px #03989e;
    align-self: center;
    padding: 8px;
  }
  .minor {
    font-size: 20px;
    list-style-position: outside;
    list-style-type: circle;
    margin: 4px 16px;
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Skills = () => {
  AOS.init();

  const [open, setOpen] = useState(false);
  const [modalTech, setModalTech] = useState();
  const [modal, setModal] = useState();

  const handleClickOpen = (tech) => {
    setOpen(true);
    setModalTech(tech);

    if (tech === "html") {
      setModal(
        <Modal>
          <img src={htmlLogo} alt="Logotipo Html" />
          <p className="major">HTML</p>
          <ul>
            <li className="minor">Estruturação de código</li>
            <li className="minor">Utilização das tags semânticas</li>
          </ul>
        </Modal>
      );
    } else if (tech === "css") {
      setModal(
        <Modal>
          <img src={cssLogo} alt="Logotipo css" />
          <p className="major">CSS</p>
          <ul>
            <li className="minor">Estilização do código</li>
            <li className="minor">
              Utilização de pré-processadores (ex. SCSS)
            </li>
          </ul>
        </Modal>
      );
    } else if (tech === "javascript") {
      setModal(
        <Modal>
          <img src={javascriptLogo} alt="Logotipo javascript" />
          <p className="major">Javascript</p>
          <ul>
            <li className="minor">Linguagem de programação</li>
            <li className="minor">Lógica da aplicação</li>
          </ul>
        </Modal>
      );
    } else if (tech === "react") {
      setModal(
        <Modal>
          <img src={reactLogo} alt="Logotipo react" />
          <p className="major">React</p>
          <ul>
            <li className="minor">Framework Javascript</li>
            <li className="minor">
              Conhecimento em consumo de API, criação de rotas, autenticação de
              usuário, estado global, styled-components, entre outros.
            </li>
          </ul>
        </Modal>
      );
    } else if (tech === "git") {
      setModal(
        <Modal>
          <img src={gitLogo} alt="Logotipo git" />
          <p className="major">Git</p>
          <ul>
            <li className="minor">Controle de versão do código</li>
            <li className="minor">Conhecimento do git-flow</li>
          </ul>
        </Modal>
      );
    }
  };

  const handleClose = (e) => {
    setOpen(false);
    setModalTech();
  };

  return (
    <Container id="skills">
      <p className="major">Meus conhecimentos</p>
      <p className="minor"> Clique nos cards para mais informações.</p>
      <CardContainer>
        <Card
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("html")}
            src={htmlLogo}
            alt="Logo HTML5"
          />
        </Card>

        <Card
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("css")}
            src={cssLogo}
            alt="Logo CSS3"
          />
        </Card>

        <Card
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("javascript")}
            src={javascriptLogo}
            alt="Logo Javascript"
          />
        </Card>

        <Card
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("react")}
            src={reactLogo}
            alt="Logo React"
          />
        </Card>

        <Card
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("git")}
            src={gitLogo}
            alt="Logo Git"
          />
        </Card>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          {modal}
        </Dialog>
      </CardContainer>
    </Container>
  );
};
export default Skills;
