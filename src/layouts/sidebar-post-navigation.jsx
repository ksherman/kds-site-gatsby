import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/fontawesome-free-solid';

export default props => {
  const postLinks = props.posts.map(({ node }) => (
    <Link key={node.id} className="post-list-item" to={node.fields.slug}>
      <div className="post-title">{node.frontmatter.title}</div>
      <div
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      />
    </Link>
  ));

  return (
    <nav className="navigation-wrapper">
      <div className="sidebar-primary-navigation">
        <Link to="/" className="site-title">
          <h1>{props.metadata.title}</h1>
        </Link>
        <div className="link-list">
          <Link className="link-list-item" to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link className="link-list-item" to="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
          </Link>
        </div>
      </div>
      <div className="sidebar-post-navigation">
        <div className="post-list">{postLinks}</div>
      </div>
    </nav>
  );
};

export const query = graphql`
  query PostsNavigationQuery {
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
