import styled from "styled-components";

export default function Stats() {
  return (
    <StyledStats>
      <div className="stats container">
        <div className="stats__item">
          <h3>Market cap</h3>
          <p>$4,659,421.15</p>
        </div>
        <div className="stats__item">
          <h3>Treasury</h3>
          <p>$12,127,953.55</p>
        </div>
        <div className="stats__item">
          <h3>Current APY</h3>
          <p>15.56%</p>
        </div>
      </div>
    </StyledStats>
  );
}

const StyledStats = styled.section`
  background: #07054c;
  color: #ffffff;
  .stats {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    &__item {
      text-align: center;
      h3 {
        font-size: 1rem;
        font-weight: 300;
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        font-weight: 500;
      }
      @media (max-width: 768px) {
        &:not(:last-child) {
          position: relative;
          padding-bottom: 1rem;
          &::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            content: "";
            display: block;
            width: 5rem;
            height: 2px;
            background: #ffffff;
          }
        }
      }
    }
  }
`;
