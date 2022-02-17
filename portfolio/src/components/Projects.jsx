import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Container = styled.div`
  background-color: black;
  height: 86vh;
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

const Projects = () => {
  AOS.init();

  const [open, setOpen] = useState(false);
  const [modalTech, setModalTech] = useState();
  const [modal, setModal] = useState();

  const handleClickOpen = (tech) => {
    setOpen(true);
    setModalTech(tech);
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
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            onClick={() => handleClickOpen("html")}
            // src={}
            alt="Logo HTML5"
          />
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
