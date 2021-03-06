module.exports = {
  siteMetadata: {
    title: `Muddy Boots Marquees`,
    description: `We're a family run marquee hire business based near Llangollen, providing marquees, furniture and equipment for all outdoor events across North Wales, Mid Wales and Shropshire`,
    author: `Rob Phoenix`,
    keywords: [
      `Marquee hire`,
      `North wales`,
      `Mid wales`,
      `Shropshire`,
      `Powys`,
      `Furniture hire`,
      `Events`,
      `Outdoor event`,
      `Agricultural shows`,
      `Festivals`,
      `Traditional marquee`,
      `Clearspan marquee`,
      `Marquee Flooring`,
      `Marquee Linings`,
      `Marquee Lighting`,
      `Event power`,
      `Loo units`,
      `Wedding marquee`,
      `Bespoke marquee`,
      `Bespoke design`,
      `Personal service`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffd43b`,
        theme_color: `#ffd43b`,
        display: `minimal-ui`,
        icon: `src/images/mbm-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
