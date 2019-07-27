module.exports = {
  siteMetadata: {
    title: `Catalyst Onepage`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      }
    ],
    anchorLinks: [
      {
        name: `Section 1`,
        link: `#section1`
      },
      {
        name: `Section 2`,
        link: `#section2`
      },
      {
        name: `Section 3`,
        link: `#section3`
      }
    ],
    socialLinks: [
      {
        name: `e-mail`,
        url: `eric@erichowey.dev`
      },
      {
        name: `Github`,
        url: `https://www.github.com/ehowey`
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`
      }
    ]
  },
  plugins: [
    `gatsby-theme-catalyst-core`,
    `gatsby-theme-catalyst-onepage`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-onepage`,
        short_name: `catalyst-onepage`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    }
  ]
};
