import styled from "styled-components";
import logoTextAlt from "../assets/logo-text-alt.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer container">
        <div className="footer__item">
          <img src={logoTextAlt} alt="Greta World" />
          <div className="socials">
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
            <a href="/">
              <SiGitbook />
            </a>
          </div>
        </div>
        <div className="footer__item">
          <h3>Products</h3>
          <a href="/">Bonds</a>
          <a href="/">Staking</a>
          <a href="/">Greta World Pro</a>
        </div>
        <div className="footer__item">
          <h3>Learn</h3>
          <a href="/">Documentation</a>
        </div>
        <div className="footer__item">
          <h3>Join the community</h3>
          <a href="/">Join Discord</a>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  color: #333333;
  .footer {
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
    @media (max-width: 768px) {
      /* flex-direction: column; */
      gap: 3rem;
      flex-wrap: wrap;
    }
    h3 {
      color: #808080;
    }
    a {
      font-size: 0.9rem;
      font-weight: 300;
    }
    &__item {
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
      gap: 1rem;
      .socials {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        svg {
          color: #07054c;
          font-size: 1.8rem;
        }
      }
      @media (max-width: 768px) {
        /* width: 100%; */
      }
      &:nth-child(2) {
        @media (max-width: 768px) {
          width: 50%;
        }
      }
      &:nth-child(3) {
        @media (max-width: 768px) {
          width: 30%;
        }
      }
    }
  }
`;
