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
        name: `web`,
        url: `https://landing.ironpal.co`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ironpalfit`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://ironpal.us7.list-manage.com/subscribe/post?u=16ae5fc44604e6a7f514dc04b&amp;id=85d688a00c', // string; add your MC list endpoint here
          timeout: 5500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
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
        mailchimp: true,
        authorsPage: true,
        basePath: '/',
      },
    }
  ],
};