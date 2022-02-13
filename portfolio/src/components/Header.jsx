import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import navMenu from "../images/navmenu.png";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  height: 14vh;

  hr {
    border: none;
    background-color: #03989e;
    height: 1px;
    width: 100%;
  }
`;
const HeaderStyle = styled.div`
  background-color: black;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 14vh;
  width: 100vw;

  img {
    height: 100%;
  }

  .btn {
    display: none;
    position: absolute;
    right: 10px;
    top: 5.5vh;
  }

  @media screen and (max-width: 620px) {
    .btn {
      display: block;
      cursor: pointer;
      img {
        width: 24px;
      }
    }
  }
`;

const HeaderMenu = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 0 8px;
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

  @media screen and (max-width: 620px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 0 40px 0 16px;
    animation: fadeIn 1s linear;
    animation-fill-mode: forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
        border: none;
      }
      to {
        opacity: 1;
        background-color: black;
        border: 1px solid
          linear-gradient(
            rgba(0, 98, 102, 1) 1%,
            #03989e 50%,
            rgba(0, 98, 102, 1) 100%
          );
      }
    }
    .items:nth-child(1) {
      margin-top: 180px;
    }
    .items {
      width: 100%;
      margin: 1px;
      margin-right: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
      text-align: center;
      border: 1px solid #03989e;
      :hover {
        color: white;
        transition: 1s ease-in;
        hr {
          animation: none;
        }
      }
    }
  }
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <HeaderContainer>
      <HeaderStyle>
        <img src={logo} alt="Logotipo Frederico" />
        {(toggleMenu || screenWidth > 620) && (
          <HeaderMenu>
            <li className="items">
              Quem sou
              <hr />
            </li>

            <li className="items">
              Conhecimentos
              <hr />
            </li>

            <li className="items">
              Projetos
              <hr />
            </li>

            <li className="items">
              Contato
              <hr />
            </li>
          </HeaderMenu>
        )}
        <div className="btn" onClick={toggleNav}>
          <img src={navMenu} alt="ícone de menu" />
        </div>
      </HeaderStyle>
      <hr />
    </HeaderContainer>
  );
};

export default Header;
