import FlipCardHover from "../FlipCardHover/FlipCardHover";
import FlipCardClick from "../FlipCardClick/FlipCardClick";
import FlipCardClickWithAnimatedText from "../FlipCardClickWithAnimatedText/FlipCardClickWithAnimatedText";
import Breathe from "../Breathe/Breathe";
import styled from "styled-components/macro";

function App() {
  return (
    <Wrapper>
      <h2>Flip Card Hover</h2>
      <FlipCardHover />
      <h2>Flip Card Click</h2>
      <FlipCardClick />
      <h2>Flip Card Click With Animated Text</h2>
      <FlipCardClickWithAnimatedText />
      <h2>Animated Circle</h2>
      <Breathe />
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

export default App;
