import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
  gap: 50px;
  @media (max-width: 600px) {
    gap: 30px;
  }
  background: #fff;
  padding: max(5vw, 30px) 5vw;
  margin: 4vw;
  box-shadow: 0px 4px 20px #0003;

  ${props => props.darkMode && "filter: brightness(0.9);"}
`

// const PartnerList = styled.ul<{ darkMode: boolean }>`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
//   background: #fff;
//   grid-column-gap: 5vw;
//   grid-row-gap: 3vw;
//   padding: 5vw;
//   margin: 4vw;
//   box-shadow: 0px 4px 20px #0003;

//   ${props => props.darkMode && "filter: brightness(0.85);"}

//   li {
//     /* opacity: 0.9; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `

export const Partners = () => {
  const logos = useStaticQuery(graphql`
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
              image={getImage(logo)}
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
