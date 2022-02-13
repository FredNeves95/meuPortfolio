import React from "react";
import styled from "styled-components";
import eu from "../images/eu.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

const Container = styled.div`
  background-color: black;
  height: 86vh;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 132px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .slide-right {
    width: 50%;
    min-width: 310px;
    text-align: center;

    img {
      max-width: 50vw;
      max-height: 35vh;
      animation: Appear 2s ease-in-out;
      @keyframes Appear {
        from {
          opacity: 0;
          margin-right: 200px;
        }
        to {
          opacity: 1;
          margin-right: 0;
        }
      }
    }
  }

  .slide-left {
    width: 50%;
    min-width: 310px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;

    p {
      font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
        "Times New Roman", serif;
    }

    a {
      text-decoration: none;
      color: white;
    }

    .minor {
      width: 100%;
      font-size: 26px;
      animation: Appear2 2s ease-in-out;
      @keyframes Appear2 {
        from {
          opacity: 0;
          margin-left: 200px;
        }
        to {
          opacity: 1;
          margin-left: 0;
        }
      }
    }

    .major {
      width: 100%;
      font-size: 42px;
      font-weight: bold;
      text-shadow: 1px 2px #03989e;

      animation: Appear2 2s ease-in-out;
      @keyframes Appear2 {
        from {
          opacity: 0;
          margin-left: 200px;
        }
        to {
          opacity: 1;
          margin-left: 0;
        }
      }
    }

    .link {
      border: 1px solid #03989e;
      animation: Appear2 2s ease-in-out;
      @keyframes Appear2 {
        from {
          opacity: 0;
          margin-left: 200px;
        }
        to {
          opacity: 1;
          margin-left: 0;
        }
      }

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
  return (
    <Container id="about">
      <div className="slide-right">
        <img src={eu} alt="Minha foto" />
      </div>
      <div className="slide-left">
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
