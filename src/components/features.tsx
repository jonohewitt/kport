import { graphql, useStaticQuery } from "gatsby"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
  withArtDirection,
} from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const FeaturesContainer = styled.div`
  background: ${({ theme }) => theme.feature};
  position: relative;
  z-index: 1;
  transform: translate3d(0, 0, 0);
`

const FeatureWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  :first-child {
    padding-top: 80px;
  }
  :last-child {
    padding-bottom: max(20px, calc(10vw - 30px));
  }
`

const Caption = styled.figcaption`
  margin: 10px 0;
  font-size: 10px;
`

const FeatureText = styled.div`
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

const FeatureSection = styled.section<{
  portrait?: boolean
}>`
  @media (max-width: 700px) {
    max-width: 85vw;
    padding-bottom: 60px;

    figure {
      margin-bottom: 40px;
    }

    :nth-of-type(2n + 1) {
      align-self: flex-start;
      ${Caption}, ${FeatureText} {
        margin-left: 15vw;
      }
      ${Caption} {
        text-align: right;
      }
    }

    :nth-of-type(2n) {
      align-self: flex-end;
      ${Caption}, ${FeatureText} {
        margin-right: 15vw;
      }
    }
  }

  @media (max-width: 400px) {
    max-width: 90vw;
    :nth-of-type(2n + 1) {
      ${Caption}, ${FeatureText} {
        margin-left: 10vw;
      }
    }

    :nth-of-type(2n) {
      ${Caption}, ${FeatureText} {
        margin-right: 10vw;
      }
    }
  }

  @media (min-width: 701px) {
    padding: 30px 0;
    display: grid;
    align-items: center;
    gap: 10%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";

    :nth-of-type(2n + 1) {
      ${Caption} {
        text-align: left;
        margin-left: 20px;
        ${props => props.portrait && "margin-left: 0;"}

        @media (min-width: 1160px) {
          margin-left: 0;
        }
      }
      ${FeatureText} {
        padding: 0 10% 0 0;
      }
      figure {
        ${props => props.portrait && "margin-left: 10%;"}
      }
    }

    :nth-of-type(2n) {
      ${Caption} {
        text-align: right;
        margin-right: 20px;
        ${props => props.portrait && "margin-right: 0;"}
        @media (min-width: 1160px) {
          margin-right: 0;
        }
      }
      ${FeatureText} {
        grid-area: left;
        padding: 0 0 0 10%;
      }
      figure {
        grid-area: right;
        ${props => props.portrait && "margin-right: 10%;"}
      }
    }
  }
`

const ConceptImage = styled(GatsbyImage)`
  @media (max-width: 700px) {
    width: 100%;
    height: 60vw;
  }
`

export const Features = () => {
  const conceptData = useStaticQuery(graphql`
    query {
      small: file(
        sourceInstanceName: { eq: "contentImages" }
        name: { eq: "kport-komorebi-small" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 600)
        }
      }
      large: file(
        sourceInstanceName: { eq: "contentImages" }
        name: { eq: "kport-komorebi" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 450)
        }
      }
    }
  `)

  const conceptImages = withArtDirection(
    getImage(conceptData.large) as IGatsbyImageData,
    [
      {
        media: "(max-width: 700px)",
        image: getImage(conceptData.small) as IGatsbyImageData,
      },
    ]
  )

  return (
    <FeaturesContainer>
      <FeatureWrapper>
        <FeatureSection id="concept" portrait>
          <figure>
            <ConceptImage
              image={conceptImages}
              alt="Shadows and light shining through photovoltaic panels onto the K:Port timber lattice structure."
              loading="lazy"
            />
            <Caption>
              <span className="bold">Client:</span> North Somerset Council -
              Portishead Marina
            </Caption>
          </figure>
          <FeatureText>
            <h2>Photosynthetic architecture</h2>
            <p>
              Our concept for K:Port® derives from the Japanese notion of
              “Komorebi”; the dappled light which occurs when sunlight shines
              through the leaves of a tree. The essence of the tree is apparent
              throughout K:Port®, from the form of the canopy itself and the
              timbers which make up its structure, to the collection and use of
              rainwater and sunlight via the solar PV surface.
            </p>
          </FeatureText>
        </FeatureSection>

        <FeatureSection id="sustainability">
          <figure>
            <StaticImage
              src="../images/content/kport-rainchains.jpg"
              alt="Detail of the chains used to facilitate rain water drainage from the roof panels"
              layout="constrained"
              placeholder="blurred"
              width={600}
            />
            <Caption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
          <FeatureText>
            <h2>Sustainability at its core</h2>
            <p>
              K:Port® is resource efficient, with a carbon-sequestering,
              responsibly sourced timber structure and options for rainwater
              harvesting, sustainable drainage and net-gain biodiversity.
            </p>
            <p>
              It is energy efficient, with integrated energy generation from the
              solar PV canopy and can be upgraded with battery storage and smart
              charging.
            </p>
          </FeatureText>
        </FeatureSection>

        <FeatureSection id="experience">
          <figure>
            <StaticImage
              src="../images/content/kport-night.jpg"
              alt="K:Port shown at night with LED strip lighting providing a safe environment"
              layout="constrained"
              placeholder="blurred"
              width={600}
            />
            <Caption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
          <FeatureText>
            <h2>Easy, enjoyable and safe to use</h2>
            <p>
              K:Port® provides sheltered charging for EVs, e-bikes and
              e-scooters, keeping equipment dry and cool. Spaces are fully
              accessible and charge points are impact protected.
            </p>
            <p>
              This high-quality environment can be made available 24/7 via the
              incorporation of integrated LED lighting, CCTV, motion sensing and
              EV bay detection.
            </p>
          </FeatureText>
        </FeatureSection>

        <FeatureSection id="smartcity">
          <figure>
            <StaticImage
              src="../images/content/kport-in-use.jpg"
              alt="A man demonstrates K:Port in use by charging a Tesla electric car under the canopy"
              layout="constrained"
              placeholder="blurred"
              width={600}
            />
            <Caption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </Caption>
          </figure>
          <FeatureText>
            <h2>Smart City enabled</h2>
            <p>
              K:Port can provide greater energy resilience and autonomy through
              its ability to generate, store, trade and moderate renewable
              power. Interaction with electric vehicles is possible through V2G.
            </p>

            <p>
              The result is a significant reduction in energy costs and carbon
              footprint for the K:Port® operator, as well as the virtual
              elimination of any energy downtime.
            </p>
          </FeatureText>
        </FeatureSection>
      </FeatureWrapper>
    </FeaturesContainer>
  )
}
