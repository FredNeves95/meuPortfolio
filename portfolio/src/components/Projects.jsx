import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import labex from "../images/labex.png";
import pokedex from "../images/pokedex.png";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Container = styled.div`
  background-color: black;
  min-height: 86vh;
  width: 100%;
  position: absolute;
  top: 186vh;
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
  align-items: center;
  text-align: center;
  width: 280px;
  margin: 0 8px;
  box-shadow: 1px 2px 3px #03989e;
  cursor: pointer;
  img {
    width: 260px;
    height: 120px;
  }

  p {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
      "Times New Roman", serif;
    padding: 0;
    margin: 0 0 8px 0;
  }

  .minor {
    width: 100%;
    font-size: 20px;
  }

  .major {
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    text-shadow: 1px 2px #03989e;
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
  max-height: 600px;
  img {
    width: 60px;
    align-self: center;
  }

  p {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
      "Times New Roman", serif;
    margin: 0 0 8px 0;
  }

  a {
    text-decoration: none;
    color: white;
    width: 100%;
    text-align: center;
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
  .link {
    display: flex;
    align-items: center;
    color: white;
    margin: 8px 0;
    height: 28px;
    width: 50%;
    align-self: center;
    text-align: center;
    background: linear-gradient(
      45deg,
      rgba(0, 64, 66, 1) 0%,
      rgba(3, 152, 158, 1) 50%,
      rgba(0, 64, 66, 1) 100%
    );

    :hover {
      transition-duration: 0.5s;
      border: 1px solid rgba(0, 64, 66, 1);
      background: linear-gradient(
        45deg,
        rgba(27, 27, 27, 1) 0%,
        rgba(0, 104, 108, 1) 50%,
        rgba(27, 27, 27, 1) 100%
      );
    }
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Projects = () => {
  AOS.init();

  const [open, setOpen] = useState(false);
  const [modalTech, setModalTech] = useState();
  const [modal, setModal] = useState();

  const handleClickOpen = (tech) => {
    setOpen(true);
    setModalTech(tech);

    if (tech === "labex") {
      setModal(
        <Modal>
          <p className="major">Labe-X</p>
          <p className="minor">
            Esse projeto foi desenvolvido em React.js, como uma simulação de um
            ambiente de viagens intergaláticas.
          </p>
          <p className="minor">
            Foi feito consumo de API, navegação em rotas, autenticação do
            usuário, utilização dos Hooks, styled-components, material UI,
            atenção à responsividade, entre outros.
          </p>
          <p className="minor">Confira esse projeto:</p>
          <div className="link">
            <a
              href="https://tenuous-brother.surge.sh/"
              target="blank"
              alt="Link para Labe-x"
            >
              Labe-X
            </a>
          </div>
          <p className="minor">Para acessar a área de administrador:</p>
          <p className="minor">Usuário: fredbneves95@gmail.com</p>
          <p className="minor">Senha: 123456</p>
        </Modal>
      );
    } else if (tech === "pokedex") {
      setModal(
        <Modal>
          <p className="major">Pokedex</p>
          <p className="minor">
            Esse projeto foi desenvolvido em React.js, o intuito é mostrar os
            pokemons existentes e algumas de suas características.
          </p>
          <p className="minor">
            Foi feito consumo de API, navegação em rotas, utilização dos Hooks,
            contexto global, styled-components, material UI, paginação, atenção
            à responsividade, entre outros.
          </p>
          <p className="minor">Confira esse projeto:</p>
          <div className="link">
            <a
              href="http://joyous-apparatus.surge.sh/"
              target="blank"
              alt="Link para Pokedex"
            >
              Pokedex
            </a>
          </div>
        </Modal>
      );
    } else {
      setModal(<></>);
    }
  };

  const handleClose = (e) => {
    setOpen(false);
    setModalTech();
  };

  return (
    <Container id="projects">
      <p className="major">Projetos</p>
      <p className="minor"> Clique nos cards para mais informações.</p>
      <CardContainer>
        <Card
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
          onClick={() => handleClickOpen("labex")}
        >
          <div>
            <p className="major">Labe-x</p>
          </div>

          <div>
            <img src={labex} alt="Projeto Labe-X" />
          </div>
        </Card>
        <Card
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
          onClick={() => handleClickOpen("pokedex")}
        >
          <div>
            <p className="major">Pokedex</p>
          </div>

          <div>
            <img src={pokedex} alt="Projeto Pokedex" />
          </div>
        </Card>
      </CardContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {modal}
      </Dialog>
    </Container>
  );
};

export default Projects;
