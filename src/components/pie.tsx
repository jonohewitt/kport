import React from "react"
import styled from "styled-components"

const Pie = styled.div`
  /* Thanks to Kitty Giraudel: https://kittygiraudel.com/2021/04/11/css-pie-timer-revisited/ */
  --color: ${({ theme }) => theme.lowContrast};

  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color);

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
    background-color: ${({ theme }) => theme.background};
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
    @media only screen and (hover: none) and (pointer: coarse) {
      bottom: 10px;
    }
  }
  top: 7px;
  right: 0;
  z-index: 1;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.background} 20px,
    ${({ theme }) => theme.transparentBG}
  );
  padding: 0 10px 0 20px;
  @media (min-width: 1100px) {
    padding: 0 5px 0 20px;
  }
`

export const PieCountdown = ({ refreshPie }: { refreshPie: number }) => (
  <PieWrapper key={refreshPie}>
    <Pie />
  </PieWrapper>
)
