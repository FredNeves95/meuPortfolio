import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import whatsapp from "../images/wpp.svg";
import email from "../images/email.svg";

const Container = styled.div`
  background-color: black;
  height: 86vh;
  width: 100%;
  position: absolute;
  top: 272vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    align-self: start;

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
  }
`;

const CardContainer = styled.div`
  height: 50vh;
  width: 80vw;
  margin-top: 10vh;
  max-width: 800px;
  min-width: 300px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10vh;
  a {
    padding: 0px 16px;
  }
  img {
    width: 80px;
    cursor: pointer;
  }
`;

const Contact = () => {
  AOS.init();
  return (
    <Container id="contact">
      <div className="title">
        <p className="major">Contato</p>
        <p className="minor">
          Escolha a melhor opção para você e mande sua mensagem.
        </p>
      </div>
      <CardContainer>
        <a
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-once="false"
          href="https://www.linkedin.com/in/frederico-neves-de-araujo/"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>

        <a
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-once="false"
          href="https://github.com/FredNeves95"
          target="_blank"
        >
          <img src={github} alt="Github" />
        </a>

        <a
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-once="false"
          href="https://wa.me/5531996192852?text=Olá, Fred.%20 Vi seu portfólio e decidi entrar em contato."
          target="_blank"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>

        <a
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-once="false"
          href="mailto:fredbneves95@gmail.com"
          target="_blank"
        >
          <img src={email} alt="Email" />
        </a>
      </CardContainer>
    </Container>
  );
};

export default Contact;
