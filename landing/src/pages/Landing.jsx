import styled from "styled-components";
import Hero from "../components/Landing/Hero";
import Section1 from "../components/Landing/Section1";
import Stats from "../components/Landing/Stats";

export default function Landing() {
  return (
    <StyledLanding>
      <Hero />
      <Stats />
      <Section1 />
    </StyledLanding>
  );
}

const StyledLanding = styled.main``;
