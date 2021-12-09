import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Seo } from "../components/seo"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { ContactButton } from "../components/contactButton"
import { Partners } from "../components/partners"
import { Features } from "../components/features"
import { Carousel } from "../components/carousel"
import { Media } from "../components/media"

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

export const FullWidthCaption = styled.figcaption<{
  side?: string
  background?: string
}>`
  position: relative;
  z-index: 1;
  padding: 10px 0 15px 0;
  font-size: 10px;
  background: ${({ theme }) => theme.background};
  ${props =>
    props.side === "left"
      ? "text-align: start;"
      : "padding-right: 20px; text-align: end;"}

  ${props => props.background && "background:" + props.background};
`

const Header = styled.header`
  width: 90%;
  max-width: 830px;
  margin: min(80px, 15%) auto;
  font-size: 22px;
  line-height: 1.6;
  h1 {
    font-size: 28px;
    max-width: 75%;
    @media (max-width: 400px) {
      max-width: 85%;
    }
    font-weight: 500;
    margin-bottom: 30px;
    line-height: 1.4;
  }
  p {
    font-size: 18px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.lightText};
  }

  a {
    margin-top: 20px;
  }
`

const TextSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.background};
  z-index: 1;
  transform: translate3d(0, 0, 0);
`

const TextSectionContent = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: min(100px, 20%) 0;
  font-size: 22px;
  line-height: 1.6;
  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 28px;
    width: 90%;
    @media (min-width: 600px) {
      width: 80%;
    }
  }
  p {
    color: ${({ theme }) => theme.lightText};
    font-size: 18px;
    margin-bottom: 14px;
  }
`

const HighlightUnderline = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colourHighlight};
  display: inline-block;
  /* border-bottom: 7px solid #3d66c645; */
`

const StyledExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  border-bottom: 4px solid ${({ theme }) => theme.linkUnderline};
  font-weight: 500;
  transition: 0.2s;
  svg {
    position: relative;
    top: 2px;
    left: 0;
    transition: 0.2s;
  }

  @media (hover: hover) {
    :hover {
      border-bottom: 4px solid ${({ theme }) => theme.linkHover};
      svg {
        transform: rotate(-45deg);
      }
    }
  }

  :active {
    border-bottom: 4px solid ${({ theme }) => theme.linkActive};
    svg {
      top: 0px;
      left: 2px;
    }
  }
`

const StyleLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  border-bottom: none;
  border-bottom: 4px solid ${({ theme }) => theme.linkUnderline};
  font-weight: 500;
  svg {
    position: relative;
    top: 2px;
    left: 0;
    transition: 0.2s;
  }
`

const Figure = styled.figure`
  position: sticky;
  top: 0;
`

const HeaderWrapper = styled.div`
  /* Ensure h1 text is indexed first by search engines */
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

const InnovativeSpan = styled.span`
  @media (min-width: 500px) {
    white-space: nowrap;
  }
`

type SafeExternalLink = `${
  | "https://www.hewittstudios.co.uk"
  | "https://hewittstudios.co.uk"}${string}`

interface ArrowLink {
  children: string
  href: SafeExternalLink
}

const ArrowLink = ({ children, href }: ArrowLink) => {
  const wordArray = children.split(" ")
  const finalWord = wordArray.pop()
  const secureURL = new RegExp("^https://www.hewittstudios.co.uk.*").test(href)

  let rel = "noopener"
  if (!secureURL || process.env.NODE_ENV === "development") rel += " noreferrer"
  return (
    /* eslint-disable react/jsx-no-target-blank */
    <StyledExternalLink href={href} target="_blank" rel={rel}>
      {wordArray.join(" ")}{" "}
      <span className="no-break">
        {finalWord} {rightArrowSVG}
      </span>
    </StyledExternalLink>
    /* eslint-enable react/jsx-no-target-blank */
  )
}

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <Seo title="Overview" />
      <HeaderWrapper>
        <Header>
          <h1>
            K:Port® is a proven smart city solution, designed to inspire and
            enable the sustainable electrification of transport.
          </h1>
          <p>
            A low-carbon, multi-modal transport hub, K:Port® has been created by
            award winning architects{" "}
            <span className="no-break">Hewitt Studios LLP</span> to democratise
            e-mobility and inspire behavioural change within local communities.
          </p>
          <p>
            Our solution enables deployment in prominent and sensitive
            locations, with minimal environmental impact and a secure & flexible
            long-term legacy.
          </p>
          <ContactButton />
        </Header>
        <Carousel />
      </HeaderWrapper>

      {/* <Media /> */}
      <Features />

      <Figure>
        <StaticImage
          src="../images/content/kport-drone.jpg"
          alt="Arial view of a single K:port 'tree' structure in the centre of a ringed road"
          layout="fullWidth"
          style={{ minHeight: "30vh", maxHeight: "60vh" }}
          imgStyle={{ objectPosition: "center 65%" }}
        />
        <FullWidthCaption>
          <span className="bold">Client:</span> North Somerset Council -
          Portishead Marina
        </FullWidthCaption>
      </Figure>

      <TextSection>
        <TextSectionContent>
          <h2>
            K:Port® is capable of rapid implementation, with an established
            supply chain ready to deliver modular, prefabricated components on
            site to be constructed in{" "}
            <HighlightUnderline>just 3 weeks.</HighlightUnderline>
          </h2>
          <p>
            Hewitt Studios LLP have a developed kit of parts available to fit
            any site, with significant economies of scale to be achieved for
            large role outs.
          </p>
          <p>
            K:Port® is cheap and easy to maintain and at the end of its life,
            the timber frame has been designed to be re-locatable and re-usable,
            and ultimately utilised as biomass fuel, ensuring a long-term
            sustainable legacy.
          </p>
        </TextSectionContent>
      </TextSection>

      <Figure>
        <StaticImage
          src="../images/content/kport-concept.jpg"
          alt="Rendered graphic of a K:Port concept hub including community spaces"
          layout="fullWidth"
          placeholder="blurred"
          style={{ minHeight: "30vh", maxHeight: "60vh" }}
          imgStyle={{ objectPosition: "right 90%" }}
        />
        <FullWidthCaption>Concept image</FullWidthCaption>
      </Figure>

      <TextSection>
        <TextSectionContent>
          <h2>
            K:Port® has been developed by Hewitt Studios LLP{" "}
            <InnovativeSpan>- an innovative</InnovativeSpan> multi-disciplinary
            studio specialising in extraordinary, sustainable environments which{" "}
            <HighlightUnderline>inspire change.</HighlightUnderline>
          </h2>
          <p>
            Hewitt Studios LLP have determinedly pursued an accessible and
            design-led approach to sustainable architecture, placing
            environmental technologies fundamentally at the heart of each of our
            projects.{" "}
            <ArrowLink href="https://www.hewittstudios.co.uk/awards/">
              Our work has been internationally recognised
            </ArrowLink>{" "}
            and we were named the UK’s “Sustainable Architect of the Year” in
            2014 for our pioneering work across the sector.
          </p>
          <p>
            K:Port® is underpinned by a full range of urban design and
            architectural consultancy services offered by Hewitt Studios LLP.
            These include business planning, research and feasibility studies,
            site selection, building control, public consultation, regulatory
            approvals, passivhaus certified design, project management and
            procurement.
          </p>

          <ArrowLink href="https://www.hewittstudios.co.uk/">
            Visit the Hewitt Studios LLP website to learn more about our
            practice
          </ArrowLink>
        </TextSectionContent>
      </TextSection>

      <Figure>
        <StaticImage
          src="../images/content/kport-2cv.jpg"
          alt="A miniature scaled development model of K:Port with a toy car."
          layout="fullWidth"
          style={{
            minHeight: "30vh",
            maxHeight: "60vh",
          }}
          imgStyle={{
            objectPosition: "center center",
            maxWidth: "1000px",
            margin: "0 auto",
            objectFit: "contain",
          }}
          backgroundColor="#000"
        />
        <FullWidthCaption background="var(--partners)">
          Development model
        </FullWidthCaption>
      </Figure>

      <Partners />
    </>
  )
}

export default IndexPage
