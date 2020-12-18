module.exports = {
  // pathPrefix: "/locounpoco",
  siteMetadata: {
    title: `Loco un poco by Victor Abeledo`,
    name: `Loco un poco`,
    siteUrl: `https://locounpo.co`,
    description: `Loco un poco. Web Programming`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectivas de programación y lo que pinte.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/victor-abeledo-aa5050ba`,
      },
      {
        name: `github`,
        url: `https://github.com/abeledovictor/locounpoco`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-RT4F0EZHM8",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        authorsPage: true,
      },
    }
  ],
};