import React from 'react';
import SidebarPostNavigation from './sidebar-post-navigation';
import '../styles/entry.scss';

export default ({ children, data }) => (
  <div className="site-wrapper">
    <SidebarPostNavigation
      metadata={data.site.siteMetadata}
      postCount={data.allMarkdownRemark.totalCount}
      posts={data.allMarkdownRemark.edges}
    />
    <div className="content-wrapper">
      {children()}
    </div>
  </div>
);

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/^/posts(/.*)?$/" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
