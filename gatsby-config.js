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
    'gatsby-plugin-sass',
  ],
};
