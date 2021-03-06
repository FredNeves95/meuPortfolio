import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import labex from "../images/labex.png";
import pokedex from "../images/pokedex.png";
import rappi from "../images/rappi.png";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Container = styled.div`
  background-color: black;
  min-height: 86vh;
  width: 100%;
  position: absolute;
  top: 186vh;

  .minor {
    width: 100%;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    padding: 3vh 0 0 5vw;
  }

  .major {
    width: 100%;
    font-size: 42px;
    font-weight: bold;
    text-shadow: 1px 2px #03989e;
    padding: 3vh 0 0 5vw;
    font-family: "Poppins", sans-serif;
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

  @media (max-width: 768px) {
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;
  margin: 8px 16px;
  box-shadow: 1px 2px 3px #03989e;
  cursor: pointer;

  img {
    height: 120px;
  }

  .minor {
    width: 100%;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  .major {
    width: 100%;
    text-align: center;
    padding: 0;
    font-size: 36px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-shadow: 1px 2px #03989e;
  }

  @media (max-width: 768px) {
    height: 164px;
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
    font-family: "Poppins", sans-serif;
  }
  .minor {
    font-size: 20px;
    list-style-position: outside;
    list-style-type: circle;
    margin: 4px 16px;
    font-family: "Roboto", sans-serif;
  }
  .link {
    font-family: "Roboto", sans-serif;
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
            Esse projeto foi desenvolvido em React.js, como uma simula????o de um
            ambiente de viagens intergal??ticas.
          </p>
          <p className="minor">
            Foi feito consumo de API, navega????o em rotas, autentica????o do
            usu??rio, utiliza????o dos Hooks, styled-components, material UI,
            aten????o ?? responsividade, entre outros.
          </p>
          <p className="minor">Confira esse projeto:</p>
          <div className="link">
            <a
              href="https://tenuous-brother.surge.sh/"
              target="_blank"
              alt="Link para Labe-x"
            >
              Labe-X
            </a>
          </div>
          <p className="minor">Para acessar a ??rea de administrador:</p>
          <p className="minor">Usu??rio: fredbneves95@gmail.com</p>
          <p className="minor">Senha: 123456</p>
        </Modal>
      );
    } else if (tech === "pokedex") {
      setModal(
        <Modal>
          <p className="major">Pokedex</p>
          <p className="minor">
            Esse projeto foi desenvolvido em React.js, o intuito ?? mostrar os
            pokemons existentes e algumas de suas caracter??sticas.
          </p>
          <p className="minor">
            Foi feito consumo de API, navega????o em rotas, utiliza????o dos Hooks,
            contexto global, styled-components, material UI, pagina????o, aten????o
            ?? responsividade, entre outros.
          </p>
          <p className="minor">Confira esse projeto:</p>
          <div className="link">
            <a
              href="https://fredpokedex.vercel.app/"
              target="_blank"
              alt="Link para Pokedex"
            >
              Pokedex
            </a>
          </div>
        </Modal>
      );
    } else if (tech === "rappi4") {
      setModal(
        <Modal>
          <p className="major">Pokedex</p>
          <p className="minor">
            Esse projeto foi desenvolvido em React.js, exclusivamente para
            mobile. O intuito ?? representar um aplicativo de comida e bebida.
          </p>
          <p className="minor">
            Foi feito consumo de API, cadastro e autentica????o de usu??rio,
            navega????o em rotas, utiliza????o dos Hooks, contexto global,
            styled-components, material UI, entre outros.
          </p>
          <p className="minor">Confira esse projeto:</p>
          <div className="link">
            <a
              href="https://fred-rappi.vercel.app/"
              target="_blank"
              alt="Link para Rappi4"
            >
              Rappi4
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
      <p className="minor"> Clique nos cards para mais informa????es.</p>
      <CardContainer>
        <Card
          data-aos="zoom-in-up"
          data-aos-duration="1000"
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
          data-aos-duration="1000"
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
        <Card
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          onClick={() => handleClickOpen("rappi4")}
        >
          <div>
            <p className="major">Rappi4</p>
          </div>

          <div>
            <img src={rappi} alt="Projeto Rappi" id="happy" />
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
