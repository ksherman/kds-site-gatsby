import React from 'react';

export default ({ data }) => (
  <div>
    <h3> About {data.site.siteMetadata.title}</h3>
    <p>This is my second page with a lot of information about me, bruh</p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
