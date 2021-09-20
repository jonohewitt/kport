import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export const Partners = () => {
  const logos = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `).allFile.nodes

//   logos.forEach(logo => console.log(getImage(logo)))

  return (
    <ul>
      {logos.map(logo => (
        <li key={logo.name}>
          <GatsbyImage image={getImage(logo)} alt={logo.name} />
        </li>
      ))}
    </ul>
  )
}
