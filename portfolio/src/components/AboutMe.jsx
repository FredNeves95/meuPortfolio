import React from "react";
import styled from "styled-components";
import eu from "../images/eu.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  background-color: black;
  height: 86vh;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 132px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  .slide-right {
    width: 50%;
    min-width: 350px;
    text-align: center;
    img {
      max-width: 70vw;
      max-height: 50vh;
    }
  }

  .slide-left {
    min-height: 30vh;
    width: 50%;
    min-width: 350px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;

    a {
      text-decoration: none;
      color: white;
    }

    .minor {
      width: 100%;
      font-size: 26px;
      font-family: "Roboto", sans-serif;
    }

    .major {
      width: 100%;
      font-size: 42px;
      font-weight: bold;
      text-shadow: 1px 2px #03989e;
      font-family: "Poppins", sans-serif;
    }

    .link {
      font-family: "Roboto", sans-serif;
      border: 1px solid #03989e;
      background: linear-gradient(
        45deg,
        rgba(0, 64, 66, 1) 0%,
        rgba(3, 152, 158, 1) 50%,
        rgba(0, 64, 66, 1) 100%
      );
      width: 120px;
      text-align: center;
      padding: 14px;
      margin: 8px 0;

      p {
        font-size: 20px;
      }

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
  }
`;

const AboutMe = () => {
  AOS.init();
  return (
    <Container id="about">
      <div
        className="slide-right"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-mirror="true"
      >
        <img src={eu} alt="Minha foto" />
      </div>

      <div
        className="slide-left"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-mirror="true"
      >
        <p className="minor">Olá, eu sou </p>
        <p className="major">Frederico.</p>

        <p className="minor">Desenvolvedor Front-end.</p>

        <a
          href="https://www.linkedin.com/in/frederico-neves-de-araujo/"
          target="blank"
        >
          <div className="link">
            <p>Linkedin</p>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default AboutMe;
