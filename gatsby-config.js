module.exports = {
  siteMetadata: {
    title: `erichowey.dev`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks:[
          {
            name:'Home',
            link:'/'
          }
            ],
    anchorLinks:[
      {
        name:'Me',
        link:'#me'
      },
      {
        name:'Work',
        link:'#work'
      },
      {
        name:'Talk to me',
        link:'#contact'
      }
        ]
  },
    plugins: [
      'gatsby-theme-catalyst-core',
      'gatsby-theme-catalyst-onepage',
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-onepage`,
        short_name: `catalyst-onepage`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    }
    ]
}