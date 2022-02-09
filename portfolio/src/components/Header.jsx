import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderContainer = styled.div`
  background-color: black;
  height: 14vh;
  width: 100vw;
  padding: 8px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100%;
  }
`;

const HeaderMenu = styled.div`
  display: flex;

  h2 {
    margin: 8px;
    padding: 4px;
    font-size: 20px;
    color: gray;
    cursor: pointer;
    hr {
      border: 1px solid black;
    }

    :hover {
      color: white;
      transition: 1s ease-in;
      hr {
        animation: slideIn 1s linear;
        animation-fill-mode: forwards;
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
            border: 1px solid;
            border-image: linear-gradient(
                to right,
                rgba(0, 98, 102, 1) 1%,
                #03989e 50%,
                rgba(0, 98, 102, 1) 100%
              )
              100% 0 100% 0/3px 0 3px 0 stretch;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo Frederico" />
      <HeaderMenu>
        <h2>
          Quem sou
          <hr />
        </h2>

        <h2>
          Conhecimentos
          <hr />
        </h2>

        <h2>
          Projetos
          <hr />
        </h2>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
