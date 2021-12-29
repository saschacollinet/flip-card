import FlipCardHover from "../FlipCardHover/FlipCardHover";
import FlipCardClick from "../FlipCardClick/FlipCardClick";
import styled from "styled-components/macro";

export default function App() {
  return (
    <Wrapper>
      <h2>Flip Card Hover</h2>
      <FlipCardHover />
      <h2>Flip Card Click</h2>
      <FlipCardClick />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 1rem;
`;
