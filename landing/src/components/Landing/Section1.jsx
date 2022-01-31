import styled from "styled-components";
import section1Img from "../../assets/section1.png";

export default function Section1() {
  return (
    <StyledSection1>
      <div className="section1 container">
        <h2>Introducing Greta World Pro</h2>
        <p>
          We’re bringing Protocol Owned Liquidity to a Metaverse near you. Learn
          about Greta World Pro
        </p>
        <a href="/">Go to Greta World Pro</a>
      </div>
    </StyledSection1>
  );
}

const StyledSection1 = styled.section`
  background: url(${section1Img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 768px) {
    background-position: 60% center;
  }
  @media (max-width: 550px) {
    background-position: 65% center;
  }
  .section1 {
    color: #07054c;
    padding: 8rem 2rem;
    @media (max-width: 768px) {
      padding: 4rem 2rem 12rem;
    }
    h2 {
      font-size: 3rem;
      font-weight: 500;
      @media (max-width: 768px) {
        max-width: 250px;
      }
    }
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 300;
      max-width: 500px;
      @media (max-width: 768px) {
        max-width: 250px;
      }
    }
    a {
      display: inline-block;
      margin-top: 1.5rem;
      background: #8820b3;
      color: #ffffff;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
    }
  }
`;
