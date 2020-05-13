module.exports = {
  siteMetadata: {
    title: "Yenisbel Valle | Portfolio",
    description:
      "Recently projects and cool stuff that am working on it.",
    siteUrl: "https://yenisbel.netlify.app",
    author: "yenisbelvalle",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yenisbel Valle`,
        short_name: `YeniValle`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#337ab7`,
        display: `fullscreen`,
        icon: `src/static/logo/favicon.png`, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
