import styled from "styled-components";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <StyledHero>
      <div className="filter"></div>
      <div className="hero container">
        <h1>
          The new world of gaming
          <br />
          where the 'GOAT' It's you
        </h1>
        <p>Get invold - Connect and share with the community</p>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  background: url(${heroImg});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  position: relative;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 25%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }
  .hero {
    position: relative;
    color: #fff;
    padding: 8rem 2rem;
    z-index: 2;
    h1 {
      font-size: 3rem;
      font-weight: 500;
    }
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`;
