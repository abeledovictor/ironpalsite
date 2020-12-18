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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-6CK1Z6PG1K" // Google Analytics / GA
        ],
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