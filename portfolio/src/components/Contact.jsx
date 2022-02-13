import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  height: 86vh;
  width: 100%;
  position: absolute;
  top: 272vh;
`;

const Contact = () => {
  return <Container id="contact">Contact</Container>;
};

export default Contact;
