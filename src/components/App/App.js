import FlipCardHover from "../FlipCardHover/FlipCardHover";
import FlipCardClick from "../FlipCardClick/FlipCardClick";
import FlipCardClickWithAnimatedText from "../FlipCardClickWithAnimatedText/FlipCardClickWithAnimatedText";
import Breathe from "../Breathe/Breathe";

function App() {
  return (
    <main>
      <br />
      <h2>Flip Card Hover</h2>
      <br />
      <FlipCardHover />
      <br />
      <h2>Flip Card Click</h2>
      <br />
      <FlipCardClick />
      <br />
      <h2>Flip Card Click With Animated Text</h2>
      <br />
      <FlipCardClickWithAnimatedText />
      <br />
      <h2>Animated Circle</h2>
      <br />
      <Breathe />
      <br />
    </main>
  );
}

export default App;
