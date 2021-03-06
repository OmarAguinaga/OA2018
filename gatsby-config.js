module.exports = {
  siteMetadata: {
    title: "Omar Aguinaga | Full Stack Developer"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-next",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Omar Aguinaga | Full Stack Developer",
        short_name: "Omar | Dev",
        start_url: "/index.html",
        background_color: "#4E54C7",
        theme_color: "#9095FB",
        display: "minimal-ui",
        icon: "./src/img/launcher-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118578093-1",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
