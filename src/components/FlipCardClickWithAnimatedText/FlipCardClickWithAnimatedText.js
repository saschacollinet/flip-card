import styled, { css } from "styled-components";
import { useState } from "react";

function FlipCardClickWithAnimatedText() {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const handleFlipCardClick = () => {
    setIsCardFlipped(!isCardFlipped);
  };
  return (
    <Card onClick={handleFlipCardClick}>
      <CardContent isCardFlipped={isCardFlipped}>
        <CardFront isCardFlipped={isCardFlipped}>
          <CardTitle isCardFlipped={isCardFlipped}>The Fair</CardTitle>
          <CardSubtitle isCardFlipped={isCardFlipped}>
            Time for some fun
          </CardSubtitle>
        </CardFront>
        <CardBack>
          <CardBody isCardFlipped={isCardFlipped}>
            Welcome to the Fair! A place for the whole family to relax and have
            fun! Enjoy your stay!
          </CardBody>
        </CardBack>
      </CardContent>
    </Card>
  );
}

const CardContent = styled.div`
  text-align: center;
  position: relative;
  padding: 15em 5em;
  transition: transform 3s;
  transform-style: preserve-3d;
  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: rotateY(-0.5turn);
    `}
`;

const Card = styled.div`
  width: 400px;
`;

const CardFront = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5em 2em;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  background-color: #b7c9e5;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg");
  background-size: cover;
  background-blend-mode: overlay;
  color: #333;
  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    border: 3px solid currentColor;
    transition: transform 6s;
    transform-style: preserve-3d;
    ${({ isCardFlipped }) =>
      isCardFlipped &&
      css`
        transform: translateZ(12rem);
      `}
  }
`;

const CardTitle = styled.h3`
  font-size: 3.5rem;
  transition: transform 6s;
  transform-style: preserve-3d;
  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: translateZ(36rem);
    `}
  /* transform: translateZ(0rem); */
  order: 2;
  text-transform: uppercase;
`;

const CardSubtitle = styled.p`
  transition: transform 6s;
  transform-style: preserve-3d;
  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: translateZ(24rem);
    `}
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.7;
`;

const CardBack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2em;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  transform: rotateY(0.5turn);
  color: #b7c9e5;
  background: #333;
`;

const CardBody = styled.p`
  transition: transform 6s;
  transform-style: preserve-3d;
  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: translateZ(24rem);
    `}
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.6;
`;

export default FlipCardClickWithAnimatedText;
