import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { FC } from "react"
import styled from "styled-components"
import { Seo } from "../components/seo"

const H1 = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: 500;
  margin-top: 20px;
`

const NotFoundPage: FC<PageProps> = () => (
  <>
    <Seo title="404: Not found" />
    <H1>404: Not Found</H1>
    <StaticImage
      src="../images/content/leaves.jpg"
      alt="Light shining through horsechestnut leaves"
      loading="eager"
      layout="constrained"
      imgStyle={{ objectFit: "cover" }}
      style={{ maxWidth: "80vw", marginTop: "20px" }}
    />
  </>
)

export default NotFoundPage
