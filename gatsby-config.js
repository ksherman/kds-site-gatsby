module.exports = {
  pathPrefix: '/kds-site-gatsby',
  siteMetadata: {
    title: 'KDSherm',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Didact Gothic', 'Arimo'],
      },
    },
    'gatsby-plugin-sass',
  ],
};
