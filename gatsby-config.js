module.exports = {
  siteMetadata: {
    title: "KDSherm's really cool site",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Didact Gothic', 'Arimo'],
      },
    },
    'gatsby-plugin-sass',
  ],
};
