import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `K:Port`,
    description: `K:Port® is a proven smart city solution, designed to inspire and enable the sustainable electrification of transport.`,
    author: `Hewitt Studios LLP`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: `./src/images/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: `./src/images/partnerLogos`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `./src/posts`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /images/,
    //     },
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
  ],
}

export default config
