import React from "react"
import styled from "styled-components"
import { ThemeName, useGlobalState } from "../context/globalState"

const Track = styled.button<{ state: boolean | undefined }>`
  padding: 0;
  border: none;
  outline-offset: 4px;
  color: inherit;
  width: 50px;
  height: 26px;
  border-radius: 26px;
  background-color: ${props => (props.state ? "#687c9c" : "#a1b0ba")};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 5px 5px hsla(0, 0%, 10%, 0.1) !important;
`
const Slider = styled.div<{ state: boolean | undefined }>`
  width: 22px;
  height: 22px;
  border-radius: 10px;
  background-color: #eee;
  position: absolute;
  right: ${props => (props.state ? "2px" : "initial")};
  left: ${props => (props.state ? "initial" : "2px")};
  box-shadow: 0 3px 3px hsla(0, 0%, 10%, 0.1);
`

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 35px;
`

const moonSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Dark mode on"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const sunSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Dark mode off"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

export const ToggleSwitch = () => {
  const {
    state: { theme },
    dispatch,
  } = useGlobalState()

  const invertTheme = (theme: ThemeName) =>
    theme === "dark" ? "light" : "dark"

  const handleClick = () => {
    dispatch({
      type: "setTheme",
      payload: invertTheme(theme),
    })
  }

  return (
    <Container>
      {sunSVG}
      <Track
        aria-label={`Switch to ${invertTheme(theme)} mode`}
        onClick={handleClick}
        state={theme === "dark"}
      >
        <Slider state={theme === "dark"} />
      </Track>
      {moonSVG}
    </Container>
  )
}
