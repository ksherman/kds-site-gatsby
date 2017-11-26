import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="single-post-wrapper">
      <h2>{post.frontmatter.title}</h2>
      <div className="single-post-author">By: {post.frontmatter.author}</div>
      <div
        className="single-post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;
