import styled from "styled-components";
import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <StyledContent className="container">
        <StyledLogo src={logo} alt="Greta Coin" />
        <StyledLogoText src={logoText} alt="Greta World" />
        <StyledLinks>
          <a href="/" className="highlight">
            Dashboard
          </a>
          <a href="/">Docs</a>
          <a href="/">How It Works</a>
          <a href="/">Roadmap</a>
          <a href="/">FAQs</a>
          <a href="/">Buy GRETA</a>
        </StyledLinks>
        <StyledMobile>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
          {isOpen && (
            <div>
              <a href="/" className="highlight">
                Dashboard
              </a>
              <a href="/">Docs</a>
              <a href="/">How It Works</a>
              <a href="/">Roadmap</a>
              <a href="/">FAQs</a>
              <a href="/">Buy GRETA</a>
            </div>
          )}
        </StyledMobile>
      </StyledContent>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: #220763;
  color: #ffffff;
`;

const StyledContent = styled.div`
  padding: 1rem 1.5rem 1rem 10rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 100%;
  left: 1.5rem;
  width: 8rem;
  transform: translateY(-50%);
  z-index: 3;
`;

const StyledLogoText = styled.img`
  height: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  .highlight {
    background: #8820b3;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #ffffff;
  }
  a {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const StyledMobile = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
  .highlight {
    background: #8820b3;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  button {
    color: #8820b3;
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
      font-size: 2.5rem;
    }
  }
  div {
    position: absolute;
    background: #ffffff;
    color: #8820b3;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    min-width: 15rem;
    top: calc(100% + 2rem);
    right: 0;
    z-index: 4;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    a {
      display: block;
    }
  }
`;
