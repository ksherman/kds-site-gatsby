import React from 'react';
import Link from 'gatsby-link';

const SiteLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children, data }) => (
  <div style={{ margin: '0 auto', maxWidth: 600, color: 'tomato' }}>
    <header>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <ul style={{ listStyle: 'none', foat: 'right' }}>
        <SiteLink to="/">Home</SiteLink>
        <SiteLink to="/about">About</SiteLink>
      </ul>
    </header>

    {children()}
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
