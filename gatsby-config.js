if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `${process.env.NODE_ENV}.env`,
  })
}

//const languages = require("./src/languages/index")

module.exports = {
  pathPrefix: "/gatsbyPrismic",
  siteMetadata: {
    title: `Integridad Corporativa 500`,
    description: `Integridad Corporativa 500 project`,
    author: `@spaceshiplabs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: __dirname + "/src/images",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `integridad-corporativa-500`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icons: [],
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ic500`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: languages.defaultLangKey,
    //     useLangKeyLayout: false,
    //     prefixDefault: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
