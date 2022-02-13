import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  height: 86vh;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 14vh;
`;

const AboutMe = () => {
  return <Container id="about">AboutMe</Container>;
};

export default AboutMe;
