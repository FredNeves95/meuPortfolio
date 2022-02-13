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

  .slide-right {
    width: 50%;
    text-align: center;

    img {
      max-width: 50vw;
      max-height: 45vh;
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
    text-align: left;
    h1 {
      color: #03989e;
      text-shadow: 1px 1px #005658;
      font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
        "Times New Roman", serif;
    }

    p {
      font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text",
        "Times New Roman", serif;
    }

    h1,
    p {
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
  }
`;

const AboutMe = () => {
  return (
    <Container id="about">
      <div className="slide-right">
        <img src={eu} alt="Minha foto" />
      </div>
      <div className="slide-left">
        <h1> Sobre mim</h1>
        <p>Eu sou ...</p>
      </div>
    </Container>
  );
};

export default AboutMe;
