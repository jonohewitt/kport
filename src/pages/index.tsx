import React, { FC } from "react"
import { Link, PageProps } from "gatsby"
import { Seo } from "../components/seo"
import styled from "styled-components"
import { useGlobalState } from "../context/globalState"
import { StaticImage } from "gatsby-plugin-image"
import { ContactButton } from "../components/contactButton"
import { Partners } from "../components/partners"
import { Features } from "../components/features"

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

const FullWidthCaption = styled.figcaption<{ side?: string }>`
  margin: 10px 0;
  font-size: 10px;
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
  display: inline-block;
  font-size: 16px;
  border-bottom: none;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  .underline {
    border-bottom: 1px solid var(--text);
  }
  svg {
    position: relative;
    top: 3px;
    left: 0;
    transition: 0.2s;
  }

  :hover {
    .underline {
      border-bottom: 2px solid var(--text);
    }
    svg {
      left: 6px;
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
      <Features />

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
          role outs.
        </p>
        <p>
          K:Port® is cheap and easy to maintain and at the end of its life, the
          timber frame has been designed to be re-locatable and re-usable, and
          ultimately utilised as biomass fuel, ensuring a long-term sustainable
          legacy.
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
          <span className="underline">
            Visit the Hewitt Studios LLP website to learn more about our{" "}
            <span className="no-break">practice {rightArrowSVG}</span>
          </span>
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
