import React from "react"
import styled from "styled-components"
import { useGlobalState } from "../context/globalState"

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import ArchDailyDark from "../images/mediaLogos/darkTheme/ArchDaily.svg"
// @ts-ignore
import ArchelloDark from "../images/mediaLogos/darkTheme/Archello.svg"
// @ts-ignore
import ArchitizerDark from "../images/mediaLogos/darkTheme/Architizer.svg"
// @ts-ignore
import FleetLeasingDark from "../images/mediaLogos/darkTheme/FleetLeasing.svg"
// @ts-ignore
import FutureVehicleDark from "../images/mediaLogos/darkTheme/FutureVehicle.svg"
// @ts-ignore
import HolzmagazinDark from "../images/mediaLogos/darkTheme/Holzmagazin.svg"
// @ts-ignore
import RACDark from "../images/mediaLogos/darkTheme/RACFoundation.svg"
// @ts-ignore
import TfLDark from "../images/mediaLogos/darkTheme/TfL.svg"
// @ts-ignore
import TreehuggerDark from "../images/mediaLogos/darkTheme/Treehugger.svg"
// @ts-ignore
import ZapmapDark from "../images/mediaLogos/darkTheme/Zapmap.svg"

// @ts-ignore
import ArchDailyLight from "../images/mediaLogos/lightTheme/ArchDaily.svg"
// @ts-ignore
import ArchelloLight from "../images/mediaLogos/lightTheme/Archello.svg"
// @ts-ignore
import ArchitizerLight from "../images/mediaLogos/lightTheme/Architizer.svg"
// @ts-ignore
import FleetLeasingLight from "../images/mediaLogos/lightTheme/FleetLeasing.svg"
// @ts-ignore
import FutureVehicleLight from "../images/mediaLogos/lightTheme/FutureVehicle.svg"
// @ts-ignore
import HolzmagazinLight from "../images/mediaLogos/lightTheme/Holzmagazin.svg"
// @ts-ignore
import RACLight from "../images/mediaLogos/lightTheme/RACFoundation.svg"
// @ts-ignore
import TfLLight from "../images/mediaLogos/lightTheme/TfL.svg"
// @ts-ignore
import TreehuggerLight from "../images/mediaLogos/lightTheme/Treehugger.svg"
// @ts-ignore
import ZapmapLight from "../images/mediaLogos/lightTheme/Zapmap.svg"

const PressAndFeatures = styled.section`
  background: ${({ theme }) => theme.feature};
`

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.feature};
  padding: 60px 0 30px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 930px;

  @media (max-width: 700px) {
    width: 90%;
    padding-left: 10%;
    padding: 50px 0 70px 10%;
    background: ${({ theme }) => theme.feature};
    background: black;
    margin-top: 40px;
  }

  h2 {
    @media (max-width: 700px) {
      position: relative;
      left: -5%;
    }
    text-align: center;
    margin-bottom: 30px;
    font-size: 21px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
  }
`

const ListWrapper = styled.div`
  margin: 0 40px;
  position: relative;
  border-radius: 10px;

  @media (max-width: 700px) {
    overflow-x: scroll;
    border-radius: 10px 0 0 10px;
    margin: 0;
    /* border: 1px solid ${({ theme }) => theme.lowContrast}; */
    border-right: 0;
  }
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  background: ${({ theme }) => theme.gallery};
  border-radius: 10px;
  padding: 50px 0;
  gap: 30px 0;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 650px;
    padding-right: 30px;
    background: ${({ theme }) => theme.feature};
  }

  li {
    display: flex;
    justify-content: space-around;
    width: 90px;
    margin: 0 40px;

    @media (max-width: 700px) {
      margin: 0 10px;
    }
  }

  /* li {
    margin: 0 50px;

    :nth-last-child(5),
    :nth-last-child(4),
    :nth-last-child(3),
    :nth-last-child(2),
    :last-child {
      margin: 0;
    }
  } */
`

export const Media = () => {
  const {
    state: { theme },
  } = useGlobalState()

  return (
    <PressAndFeatures>
      <Container>
        <h2>Press & Features</h2>
        <ListWrapper>
          <List>
            <li>{theme === "dark" ? <ArchDailyDark /> : <ArchDailyLight />}</li>
            <li>{theme === "dark" ? <ArchelloDark /> : <ArchelloLight />}</li>
            <li>
              {theme === "dark" ? <ArchitizerDark /> : <ArchitizerLight />}
            </li>
            <li>
              {theme === "dark" ? <FleetLeasingDark /> : <FleetLeasingLight />}
            </li>
            <li>
              {theme === "dark" ? (
                <FutureVehicleDark />
              ) : (
                <FutureVehicleLight />
              )}
            </li>
            <li>
              {theme === "dark" ? <HolzmagazinDark /> : <HolzmagazinLight />}
            </li>
            <li>{theme === "dark" ? <RACDark /> : <RACLight />}</li>
            <li>{theme === "dark" ? <TfLDark /> : <TfLLight />}</li>
            <li>
              {theme === "dark" ? <TreehuggerDark /> : <TreehuggerLight />}
            </li>
            <li>{theme === "dark" ? <ZapmapDark /> : <ZapmapLight />}</li>
          </List>
        </ListWrapper>
      </Container>
    </PressAndFeatures>
  )
}
