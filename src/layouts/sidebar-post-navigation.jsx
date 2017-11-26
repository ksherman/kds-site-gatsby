import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const postLinks = props.posts.map(({ node }) => (
    <Link key={node.id} className="post-list-item" to={node.fields.slug}>
      <div className="title">Title: {node.frontmatter.title}</div>
      <div
        className="excerpt"
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      />
    </Link>
  ));

  return (
    <div className="sidebar-post-navigation">
      <div className="post-list">{postLinks}</div>
    </div>
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
