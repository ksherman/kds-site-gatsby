module.exports = {
  siteMetadata: {
    title: "KDSherm's really cool site",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
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
