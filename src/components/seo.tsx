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
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteURL = site.siteMetadata.siteURL

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

        // OPEN GRAPH

        {
          property: `og:title`,
          // content: `${title}`,
          content: `K:Port - Low carbon, multi-modal transport hub`,
        },
        {
          property: `og:image`,
          content: "https://kport.co.uk/images/KPortOG.jpg",
        },
        {
          property: `og:image:alt`,
          content:
            "K:Port timber structure, integrated lighting and photovoltaic roof panels",
        },
        {
          property: `og:url`,
          content: siteURL,
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
          property: `og:locale`,
          content: `en_GB`,
        },

        // TWITTER

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:site`,
          content: "@hewittstudios",
        },
        {
          property: `twitter:creator`,
          content: "@hewittstudios",
        },
        {
          property: `twitter:image`,
          content: "https://kport.co.uk/images/KPortOG.jpg",
        },
        {
          property: `twitter:image:alt`,
          content:
            "K:Port timber structure, integrated lighting and photovoltaic roof panels",
        },
        {
          name: `twitter:title`,
          // content: `${title}`,
          content: `K:Port - Low carbon, multi-modal transport hub`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },

        // SAFARI

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
