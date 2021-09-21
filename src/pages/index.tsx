import React, { FC } from "react"
import { Link, PageProps } from "gatsby"
import { Seo } from "../components/seo"
import styled from "styled-components"
import { useGlobalState } from "../context/globalState"
import { StaticImage } from "gatsby-plugin-image"
import { ContactButton } from "../components/contactButton"
import { Partners } from "../components/partners"

const Caption = styled.figcaption<{ side?: string }>`
  margin: 10px 0;
  font-size: 12px;
`

const FullWidthCaption = styled(Caption)`
  ${props =>
    props.side === "left"
      ? "text-align: start;"
      : "position: absolute; right: 20px; text-align: end;"}
`

const Header = styled.header`
  width: 90%;
  max-width: 800px;
  margin: 110px auto;
  font-size: 22px;
  line-height: 1.6;
  h1 {
    font-weight: 500;
    margin-bottom: 24px;
  }
  p {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

const TextSection = styled.section`
  width: 90%;
  max-width: 800px;
  margin: 110px auto;
  font-size: 22px;
  line-height: 1.6;
  h2 {
    font-weight: 500;
    margin-bottom: 24px;
  }
  p {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

const FeatureText = styled.div<{ side?: string }>`
  padding: ${props => (props.side === "left" ? "0 0 0 10%" : "0 10% 0 0")};
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 22px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 22px;
  }
`

const FeatureSection = styled.section<{ side?: string; aspect?: string }>`
  background: ${props => props.theme.feature};
  padding: 60px 0;
  display: grid;
  align-items: center;
  grid-gap: 10%;
  grid-template-columns: 1fr 1fr;

  :first-of-type {
    padding-top: 110px;
  }

  :last-of-type {
    padding-bottom: 110px;
  }

  ${Caption} {
    ${props => {
      if (props.side === "left") {
        if (props.aspect === "portrait") {
          return "text-align: start;"
        } else return "position: absolute; left: 20px; text-align: start;"
      } else {
        if (props.aspect === "portrait") {
          return "text-align: end;"
        } else return "position: absolute; right: 20px; text-align: end;"
      }
    }}
  }

  figure {
    ${props => props.aspect === "portrait" && "margin-left: 20%;"}
  }
`

const Features = styled.div``

const Concept = styled(FeatureSection)``
const Sustainability = styled(FeatureSection)``
const Experience = styled(FeatureSection)``
const SmartCity = styled(FeatureSection)`
  ul {
    list-style: disc;
    li {
      line-height: 1.6;
      margin-bottom: 16px;
    }
  }
`

const IndexPage: FC<PageProps> = () => {
  const { dispatch } = useGlobalState()

  return (
    <>
      <Seo title="Home" />
      <figure>
        <StaticImage
          src="../images/content/kport-bluesky.jpg"
          alt=""
          loading="eager"
          layout="fullWidth"
        />
        <FullWidthCaption>
          <span className="bold">Client:</span> Transport for London - Woolwich,
          London
        </FullWidthCaption>
      </figure>
      <Header>
        <h1>
          K:Port® is a low-carbon, multi-modal transport solution designed to
          democratise e-mobility and inspire behavioural change within the
          communities it serves.
        </h1>
        <p>
          Representing a fresh approach to e-mobility and a declaration of the
          ‘art of the possible’, Hewitt Studios’ intention is that this
          attractive, front-of house mobility hub will offer, with a clear focus
          on well-being, health and sustainability, help to motivate consumer
          changes in behaviour. Unlike established and familiar solutions,
          K:Port® allows deployment in prominent and sensitive locations, with
          minimal environmental impact and a secure & flexible long-term legacy.
        </p>
        <ContactButton />
      </Header>
      <figure>
        <StaticImage
          src="../images/content/kport-concept.jpg"
          alt=""
          layout="fullWidth"
        />
        <FullWidthCaption>Concept image</FullWidthCaption>
      </figure>
      <Features>
        <Concept side="left" aspect="portrait">
          <figure>
            <StaticImage
              src="../images/content/kport-komorebi.jpg"
              alt=""
              layout="constrained"
            />
            <Caption side="left">
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
          <FeatureText side="right">
            <h2>Photosynthetic architecture</h2>
            <p>
              Hewitt Studios’ concept for K:Port® derives from the Japanese
              notion of “Komorebi”; the dappled light which occurs when sunlight
              shines through the leaves of a tree. The essence of the tree is
              apparent throughout the K:Port®, from the form of the canopy
              itself and the timbers which make up its structure, to the
              collection and use of rainwater and sunlight via the solar PV
              surface.
            </p>
          </FeatureText>
        </Concept>

        <Sustainability>
          <FeatureText side="left">
            <h2>Sustainability at its core</h2>
            <p>
              K:Port® is resource efficient, with a carbon-sequestering,
              responsibly sourced timber structure and options for rainwater
              harvesting, sustainable drainage and net-gain biodiversity.
            </p>
            <p>
              It is energy efficient, with integrated energy generation from the
              Solar PV canopy and can be upgraded with battery storage and smart
              charging. K:Port® can also be Smart City enabled with smart
              sensors, energy monitoring and energy aggregation functionality.
            </p>
          </FeatureText>
          <figure>
            <StaticImage
              src="../images/content/kport-rainchains.jpg"
              alt=""
              layout="constrained"
            />
            <Caption side="left">
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
        </Sustainability>

        <Experience side="left">
          <figure>
            <StaticImage
              src="../images/content/kport-night.jpg"
              alt=""
              layout="constrained"
            />
            <Caption side="left">
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
          <FeatureText side="right">
            <h2>Easy, enjoyable and safe to use</h2>
            <p>
              The high-quality environment can be made available 24/7 via the
              incorporation of integrated LED lighting, CCTV and motion sensing
              / EV bay detection. K:Port® provides sheltered charging for EVs,
              e-bikes and e-scooters, keeping equipment dry and cool. Spaces are
              fully accessible in accordance with Part M and charge points are
              protected in line with IET guidelines.
            </p>
          </FeatureText>
        </Experience>

        <SmartCity>
          <FeatureText side="left">
            <h2>Smart city and energy</h2>
            <p>
              To meet the energy challenge, K:Port can be smart city enabled,
              providing greater resilience and autonomy through its ability to:
            </p>
            <ul>
              <li>
                Generate and store renewable energy across a entire district.
              </li>
              <li>
                Dynamically trade and moderate energy demand across the same
                area.
              </li>
              <li>
                Interact with electric vehicles in a more sophisticated way
                through V2G, both charging, but also discharging, vehicles when
                power is needed elsewhere.
              </li>
            </ul>
            <p>
              The result is a significant reduction in energy costs and carbon
              footprint for the K:Port operator and its district partners, as
              well as the virtual elimination of any energy downtime, and a new
              and closer relationship between energy providers and consumers.
            </p>
          </FeatureText>
          <figure>
            <StaticImage
              src="../images/content/energy.jpg"
              alt=""
              layout="constrained"
            />
            <Caption side="left">
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
        </SmartCity>
      </Features>
      <figure>
        <StaticImage
          src="../images/content/kport-drone.jpg"
          alt=""
          layout="fullWidth"
        />
        <FullWidthCaption>
          <span className="bold">Client:</span> North Somerset Council -
          Portishead Marina
        </FullWidthCaption>
      </figure>
      <TextSection>
        <h2>
          K:Port® is capable of rapid implementation, with an established supply
          chain ready to deliver modular, prefabricated components on site to be
          constructed in 2-3 weeks.
        </h2>
        <p>
          Hewitt Studios have a developed kit of parts available to fit any
          site, with significant economies of scale to be achieved for large
          role outs. K:Port® is cheap and easy to maintain and at the end of its
          life, the timber frame has been designed to be re-locatable (to
          another site), re-usable (as a building frame) and / or disposable (as
          biomass fuel), ensuring a long-term sustainable legacy.
        </p>
        <ContactButton />
      </TextSection>
      <figure>
        <StaticImage
          src="../images/content/kport-2cv.jpg"
          alt=""
          layout="fullWidth"
        />
        <FullWidthCaption>Development model</FullWidthCaption>
      </figure>
      <TextSection>
        <h2>
          K:Port® has been developed by Hewitt Studios LLP, an award-winning
          Architecture and Urban Design practice.
        </h2>
        <p>
          Bath-based Hewitt Studios are an innovative multi-disciplinary studio
          specialising in extraordinary, sustainable environments which inspire
          change.
        </p>
        <p>
          Since our inception in 2008 Hewitt Studios has determinedly pursued an
          accessible and design-led approach to sustainable architecture.
          Working through a recession in which sustainability was widely
          perceived as an unaffordable ‘extra’, we have sought to place it
          fundamentally at the heart of each of our projects – creating outcomes
          (and value) that wouldn’t have been possible without this impetus;
          leverage additional funding, achieving difficult planning permissions,
          underwriting business plans, reinvigorating brownfield sites and
          creating inspirational and educational spaces.
        </p>
        <p>
          In December 2014 we were named the UK’s ‘Sustainable Architect of the
          Year’ for our pioneering work across the sector.
        </p>

        {/* <Partners /> */}
      </TextSection>

      {/* <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={() => dispatch({ type: "setTheme", payload: "dark" })}>
        Switch to dark
      </button>
      <button onClick={() => dispatch({ type: "setTheme", payload: "light" })}>
        Switch to light
      </button>
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p> */}
    </>
  )
}

export default IndexPage
