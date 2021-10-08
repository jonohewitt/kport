import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `K:Port - Low carbon, multi-modal transport hub by Hewitt Studios LLP`,
    description: `Proven smart city & EV charging solution, designed to inspire & enable the sustainable electrification of transport.`,
    author: `Hewitt Studios LLP`,
    siteUrl: "https://kport.co.uk",
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `K:Port`,
        short_name: `K:Port`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon/icon.png`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
  ],
}

export default config
