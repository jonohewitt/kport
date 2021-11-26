import React from "react"
import styled from "styled-components"

const Pie = styled.div`
  /* Thanks to Kitty Giraudel: https://kittygiraudel.com/2021/04/11/css-pie-timer-revisited/ */

  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color);
  --color: var(--lowContrast);

  ::before,
  ::after {
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    border-radius: 8px 0 0 8px;
    transform-origin: center right;
    animation-iteration-count: 1;
    animation-duration: 5s;
  }

  ::before {
    z-index: 1;
    background-color: var(--background);
    animation-name: mask;
    animation-timing-function: steps(1);
  }

  ::after {
    background-color: var(--color);
    animation-name: rotate;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes mask {
    50%,
    100% {
      background-color: var(--color);
      transform: rotate(0.5turn);
    }
  }
`

const PieWrapper = styled.div`
  position: absolute;
  @media (max-width: 600px) {
      top: unset;
      bottom: 24px;
  }
  top: 7px;
  right: 0;
  z-index: 1;
  background: linear-gradient(
    to left,
    var(--background) 20px,
    /* red 20px, */ var(--transparentBG)
  );
  padding: 0 10px 0 20px;
  @media (min-width: 1100px) {
    padding: 0 5px 0 20px;
  }
`

export const PieCountdown = ({ refreshPie }) => (
  <PieWrapper key={refreshPie}>
    <Pie />
  </PieWrapper>
)
