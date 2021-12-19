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
    padding: 60px 0 30px 10%;
    background: ${({ theme }) => theme.feature};
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

const ScrollContainer = styled.div`
  margin: 0 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.media};
  box-shadow: 0px 4px 20px #0003;
  border: 2px solid ${({ theme }) => theme.mediaOutline};

  @media (max-width: 700px) {
    margin: 0;
    padding: 10px 0 10px 10px;
    border-right: 0;
    border-radius: 10px 0 0 10px;
  }
`

const ListWrapper = styled.div`
  position: relative;
  border-radius: 10px;

  @media (max-width: 700px) {
    overflow-x: scroll;
    scrollbar-color: ${({ theme }) => theme.lowContrast} transparent;
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
  padding: 50px 0;
  gap: 30px 0;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 800px;
    padding-right: 30px;
    padding-bottom: 40px;
  }

  @media (max-width: 500px) {
    width: 650px;
    padding-right: 30px;
    padding-bottom: 40px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 45px;
    margin: 0 35px;
    @media (max-width: 700px) {
      margin: 0 30px;
    }
    @media (max-width: 500px) {
      margin: 0 10px;
    }
  }
`

export const Media = () => {
  const {
    state: { theme },
  } = useGlobalState()

  interface MediaOutlet {
    DarkSVG: any
    LightSVG: any
    href: `https://${string}`
    title: string
  }

  const MediaOutlet = ({ DarkSVG, LightSVG, href, title }: MediaOutlet) => {
    return (
      <li>
        <a href={href} target="_blank" rel="noreferrer noopener" title={title}>
          {theme === "dark" ? <DarkSVG /> : <LightSVG />}
        </a>
      </li>
    )
  }

  return (
    <PressAndFeatures>
      <Container>
        <h2>Press & Features</h2>
        <ScrollContainer>
          <ListWrapper>
            <List>
              <MediaOutlet
                title="ArchDaily"
                DarkSVG={ArchDailyDark}
                LightSVG={ArchDailyLight}
                href="https://www.archdaily.com/catalog/us/products/23871/timber-construction-of-k-port-electric-vehicle-charging-station-portishead-hess-timber"
              />
              <MediaOutlet
                title="Archello"
                DarkSVG={ArchelloDark}
                LightSVG={ArchelloLight}
                href="https://archello.com/project/kportr-sustainable-mobility-hubs"
              />
              <MediaOutlet
                title="Architizer"
                DarkSVG={ArchitizerDark}
                LightSVG={ArchitizerLight}
                href="https://architizer.com/projects/kport-sustainable-mobility-hubs/"
              />
              <MediaOutlet
                title="Fleet & Leasing"
                DarkSVG={FleetLeasingDark}
                LightSVG={FleetLeasingLight}
                href="https://www.fleetandleasing.com/leasing-news-1/new-kport-sustainable-ev-charging-hubs-unveiled/"
              />
              <MediaOutlet
                title="FutureVehicle"
                DarkSVG={FutureVehicleDark}
                LightSVG={FutureVehicleLight}
                href="https://edition.pagesuite-professional.co.uk/html5/reader/production/default.aspx?pubname=&pubid=31fc6bd2-1ca3-4012-bf77-cdd897167723&pnum=80"
              />
              <MediaOutlet
                title="Holzmagazin"
                DarkSVG={HolzmagazinDark}
                LightSVG={HolzmagazinLight}
                href="https://www.holzmagazin.com/architektur/2741-elektrotankstelle-als-holzkonstruktion"
              />
              <MediaOutlet
                title="RAC Foundation"
                DarkSVG={RACDark}
                LightSVG={RACLight}
                href="https://www.racfoundation.org/assets/rac_foundation/content/downloadables/Ultra_Low_Emission_Vehicle_Infrastructure_Harold_Dermott_September_2017.pdf#page=35"
              />
              <MediaOutlet
                title="Transport for London"
                DarkSVG={TfLDark}
                LightSVG={TfLLight}
                href="https://lruc.content.tfl.gov.uk/london-electric-vehicle-infrastructure-taskforce-delivery-plan.pdf#page=40"
              />
              <MediaOutlet
                title="Treehugger"
                DarkSVG={TreehuggerDark}
                LightSVG={TreehuggerLight}
                href="https://www.treehugger.com/charge-electric-car-in-style-k-port-5201045"
              />
              <MediaOutlet
                title="Zapmap"
                DarkSVG={ZapmapDark}
                LightSVG={ZapmapLight}
                href="https://www.zap-map.com/portishead-to-get-kport-ev-charging-hub/"
              />
            </List>
          </ListWrapper>
        </ScrollContainer>
      </Container>
    </PressAndFeatures>
  )
}
