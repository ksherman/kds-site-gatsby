import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id} className="list-post">
      <Link to={node.fields.slug}>
        <div className="title">Title: {node.frontmatter.title}</div>
        <div className="author">Author: {node.frontmatter.author}</div>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </Link>
    </div>
  ));

  return (
    <div className="list-wrapper">
      {data.allMarkdownRemark.totalCount} posts!
      {posts}
    </div>
  );
};

export const query = graphql`
  query PostsQuery {
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
