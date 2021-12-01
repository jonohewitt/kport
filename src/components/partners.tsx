import { graphql, useStaticQuery } from "gatsby"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import React from "react"
import styled from "styled-components"
import { useGlobalState } from "../context/globalState"

const Section = styled.section`
  position: relative;
  z-index: 1;
  transform: translate3d(0, 0, 0);
  background: ${props => props.theme.partners};
  padding: 60px 0;
  h2 {
    opacity: 0.8;
    width: 90%;
    max-width: 800px;
    margin: 0 auto 25px auto;
    font-size: 22px;
    line-height: 1.6;
    font-weight: 500;
    text-align: center;
  }
`

const PartnerList = styled.ul<{ darkMode: boolean }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  grid-gap: 50px;
  gap: 50px;

  /* target mobile safari */
  @supports (selector(:nth-child(1 of x))) or (-webkit-touch-callout: none) {
    li {
      margin: 15px;
      @media (max-width: 600px) {
        margin: 12px;
      }
      @media (max-width: 400px) {
        margin: 8px;
      }
    }
  }

  @media (max-width: 600px) {
    grid-gap: 30px;
    gap: 30px;
  }
  background: #fff;
  padding: max(5vw, 30px) 5vw;
  margin: 4vw;
  box-shadow: 0px 4px 20px #0003;

  ${props => props.darkMode && "filter: brightness(0.9);"};
`

interface Logo extends FileNode {
  name: string
}

export const Partners = () => {
  const logos: Logo[] = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              height: 200
              placeholder: NONE
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `).allFile.nodes

  const { state } = useGlobalState()

  return (
    <Section>
      <h2>Working with:</h2>
      <PartnerList darkMode={state.theme === "dark"}>
        {logos.map(logo => (
          <li key={logo.name} title={logo.name}>
            <GatsbyImage
              image={getImage(logo) as IGatsbyImageData}
              alt={logo.name}
              backgroundColor="#fff"
              style={{
                maxWidth: "clamp(110px, 12vw, 200px)",
                height: "45px",
              }}
              imgStyle={{ objectFit: "contain" }}
            />
          </li>
        ))}
      </PartnerList>
    </Section>
  )
}
