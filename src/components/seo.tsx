import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { darkTheme, lightTheme } from "../theme/themeVariables"

interface PropertyMetaObj {
  property: string
  content: string
}

interface NameMetaObj {
  name: string
  content: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

interface Seo {
  title: string
  description?: string
  lang?: string
  meta?: Meta
}

export const Seo: FC<Seo> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: "https://kport.co.uk/images/KPortOG.jpg",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image`,
          content: "https://kport.co.uk/images/KPortOG.jpg",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "theme-color",
          content: `${lightTheme.nav}`,
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: `${darkTheme.nav}`,
          media: "(prefers-color-scheme: dark)",
        },
      ].concat(meta)}
    />
  )
}
