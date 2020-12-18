module.exports = {
  // pathPrefix: "/locounpoco",
  siteMetadata: {
    title: `Iron Pal - gym workout log`,
    name: `Iron Pal`,
    siteUrl: `https://ironpal.co`,
    description: `Iron Pal - gym workout log`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `If you can't measure it, you can't improve it.`,
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
        trackingId: "G-6CK1Z6PG1K",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/do-not-track/me/too/"],
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