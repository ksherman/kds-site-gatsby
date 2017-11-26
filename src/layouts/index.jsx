import React from 'react';
import Link from 'gatsby-link';
import SidebarPostNavigation from './sidebar-post-navigation';
import '../styles/entry.scss';

export default ({ children, data }) => (
  <div className="site-wrapper">
    <nav className="sidebar-primary-navigation">
      <Link to="/" className="site-title">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <div className="link-list">
        <Link className="link-list-item" to="/">
          Home
        </Link>
        <Link className="link-list-item" to="/about">
          About
        </Link>
      </div>
    </nav>
    <SidebarPostNavigation posts={data.allMarkdownRemark.edges} />
    {children()}
  </div>
);

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
