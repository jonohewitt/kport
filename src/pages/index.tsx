import React, { FC } from "react"
import { Link, PageProps } from "gatsby"
import { Seo } from "../components/seo"
import styled from "styled-components"
import { useGlobalState } from "../context/globalState"
import { StaticImage } from "gatsby-plugin-image"
import { ContactButton } from "../components/contactButton"
import { Partners } from "../components/partners"

const rightArrowSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

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

const ArrowLink = styled.a`
  font-size: 16px;
  border-bottom: none;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  span {
    border-bottom: 1px solid var(--text);
  }
  svg {
    position: relative;
    top: 3px;
    left: 0;
    transition: 0.2s;
  }

  :hover {
    span {
      border-bottom: 2px solid var(--text);
    }
    svg {
      left: 6px;
    }
  }
`

const FeatureText = styled.div<{ side?: string }>`
  padding: ${props => (props.side === "left" ? "0 0 0 10%" : "0 10% 0 0")};

  @media (min-width: 1200px) {
    padding: 0;
  }

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
  padding: 30px 0;
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
        } else return "margin-left: 20px; text-align: start;"
      } else {
        if (props.aspect === "portrait") {
          return "text-align: end;"
        } else return "margin-right: 20px; text-align: end;"
      }
    }}
  }

  figure {
    ${props => props.aspect === "portrait" && "margin-left: 10%;"}
  }
`

const Features = styled.div`
  background: ${props => props.theme.feature};
`

const FeatureContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

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
  // const { dispatch } = useGlobalState()

  return (
    <>
      <Seo title="Home" />

      <figure>
        <StaticImage
          src="../images/content/kport-bluesky.jpg"
          alt="Detail of the K:Port timber structure with photovoltaic panels casting shadows"
          loading="eager"
          layout="fullWidth"
          imgStyle={{ objectFit: "cover" }}
          style={{ maxHeight: "55vh" }}
        />
        <FullWidthCaption>
          <span className="bold">Client:</span> North Somerset Council -
          Portishead Marina
        </FullWidthCaption>
      </figure>
      <Header>
        <h1>
          K:Port® is a proven smart city solution, designed to inspire and
          enable the sustainable electrification of transport.
        </h1>
        <p>
          A low-carbon, multi-modal transport hub, K:Port® has been created by
          award winning architects Hewitt Studios LLP to democratise e-mobility
          and inspire behavioural change within local communities. Our solution
          enables deployment in prominent and sensitive locations, with minimal
          environmental impact and a secure & flexible long-term legacy.
        </p>
        <ContactButton />
      </Header>
      <figure>
        <StaticImage
          src="../images/content/kport-concept.jpg"
          alt="Computer rendered graphic of a K:Port concept including community spaces"
          layout="fullWidth"
          placeholder="blurred"
        />
        <FullWidthCaption>Concept image</FullWidthCaption>
      </figure>
      <Features>
        <FeatureContainer>
          <Concept id="concept" side="left" aspect="portrait">
            <figure>
              <StaticImage
                src="../images/content/kport-komorebi.jpg"
                alt="Shadows and light shining through photovoltaic panels onto the K:Port timber lattice structure."
                layout="constrained"
                placeholder="blurred"
                width={500}
              />
              <Caption side="left">
                <span className="bold">Client:</span> North Somerset Council -
                Portishead Marina
              </Caption>
            </figure>
            <FeatureText side="right">
              <h2>Photosynthetic architecture</h2>
              <p>
                Our concept for K:Port® derives from the Japanese notion of
                “Komorebi”; the dappled light which occurs when sunlight shines
                through the leaves of a tree. The essence of the tree is
                apparent throughout K:Port®, from the form of the canopy itself
                and the timbers which make up its structure, to the collection
                and use of rainwater and sunlight via the solar PV surface.
              </p>
            </FeatureText>
          </Concept>

          <Sustainability id="sustainability">
            <FeatureText side="left">
              <h2>Sustainability at its core</h2>
              <p>
                K:Port® is resource efficient, with a carbon-sequestering,
                responsibly sourced timber structure and options for rainwater
                harvesting, sustainable drainage and net-gain biodiversity.
              </p>
              <p>
                It is energy efficient, with integrated energy generation from
                the solar PV canopy and can be upgraded with battery storage and
                smart charging.
              </p>
            </FeatureText>
            <figure>
              <StaticImage
                src="../images/content/kport-rainchains.jpg"
                alt="Detail of the chains used to facilitate rain water drainage from the roof panels"
                layout="constrained"
                placeholder="blurred"
                width={500}
              />
              <Caption side="left">
                <span className="bold">Client:</span> Transport for London -
                Woolwich, London
              </Caption>
            </figure>
          </Sustainability>

          <Experience id="experience" side="left">
            <figure>
              <StaticImage
                src="../images/content/kport-night.jpg"
                alt="K:Port shown at night with LED strip lighting providing a safe environment"
                layout="constrained"
                placeholder="blurred"
                width={500}
              />
              <Caption side="left">
                <span className="bold">Client:</span> Transport for London -
                Woolwich, London
              </Caption>
            </figure>
            <FeatureText side="right">
              <h2>Easy, enjoyable and safe to use</h2>
              <p>
                K:Port® provides sheltered charging for EVs, e-bikes and
                e-scooters, keeping equipment dry and cool. Spaces are fully
                accessible and charge points are impact protected.
              </p>
              <p>
                This high-quality environment can be made available 24/7 via the
                incorporation of integrated LED lighting, CCTV, motion sensing
                and EV bay detection.
              </p>
            </FeatureText>
          </Experience>

          <SmartCity id="smartcity">
            <FeatureText side="left">
              <h2>Smart City enabled</h2>
              <p>
                K:Port can provide greater energy resilience and autonomy
                through its ability to generate, store, trade and moderate
                renewable power. Interaction with electric vehicles is possible
                through V2G.
              </p>

              <p>
                The result is a significant reduction in energy costs and carbon
                footprint for the K:Port® operator, as well as the virtual
                elimination of any energy downtime.
              </p>
            </FeatureText>
            <figure>
              <StaticImage
                src="../images/content/kport-in-use.jpg"
                alt="A man demonstrates K:Port in use by charging a Tesla electric car under the canopy"
                layout="constrained"
                placeholder="blurred"
                width={500}
              />
              <Caption side="left">
                <span className="bold">Client:</span> Transport for London -
                Woolwich, London
              </Caption>
            </figure>
          </SmartCity>
        </FeatureContainer>
      </Features>

      <figure>
        <StaticImage
          src="../images/content/kport-drone.jpg"
          alt="Arial view of a single K:port 'tree' structure in the centre of a ringed road"
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
          constructed in 3 weeks.
        </h2>
        <p>
          Hewitt Studios LLP have a developed kit of parts available to fit any
          site, with significant economies of scale to be achieved for large
          role outs. K:Port® is cheap and easy to maintain and at the end of its
          life, the timber frame has been designed to be re-locatable and
          re-usable, and ultimately utilised as biomass fuel, ensuring a
          long-term sustainable legacy.
        </p>
        <ContactButton />
      </TextSection>

      <figure>
        <StaticImage
          src="../images/content/kport-2cv.jpg"
          alt="A miniature scaled development model of K:Port with a toy car."
          layout="fullWidth"
        />
        <FullWidthCaption>Development model</FullWidthCaption>
      </figure>
      <TextSection>
        <h2>
          K:Port® has been developed by Hewitt Studios LLP - an innovative
          multi-disciplinary studio specialising in extraordinary, sustainable
          environments which inspire change.
        </h2>
        <p>
          Hewitt Studios LLP have determinedly pursued an accessible and
          design-led approach to sustainable architecture, placing environmental
          technologies fundamentally at the heart of each of our projects.{" "}
          <a
            href="https://www.hewittstudios.co.uk/awards/"
            target="_blank"
            rel="noopener"
          >
            Our work has been internationally recognised
          </a>{" "}
          and we were named the UK’s “Sustainable Architect of the Year” in 2014
          for our pioneering work across the sector.
        </p>
        <p>
          K:Port® is underpinned by a full range of urban design and
          architectural consultancy services offered by Hewitt Studios LLP.
          These include business planning, research and feasibility studies,
          site selection, building control, public consultation, regulatory
          approvals, passivhaus certified design, project management and
          procurement.
        </p>

        <ArrowLink
          href="https://www.hewittstudios.co.uk/"
          target="_blank"
          rel="noopener"
          className="text-link"
        >
          <span>
            Visit the Hewitt Studios LLP website to learn more about our
            practice
          </span>{" "}
          {rightArrowSVG}
        </ArrowLink>
      </TextSection>
      <Partners />

      {/* 
      <button onClick={() => dispatch({ type: "setTheme", payload: "dark" })}>
        Switch to dark
      </button>
      <button onClick={() => dispatch({ type: "setTheme", payload: "light" })}>
        Switch to light
      </button>*/}
    </>
  )
}

export default IndexPage
