import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import { faTwitter, faLinkedin } from '@fortawesome/fontawesome-free-brands';

export default props => {
  const postLinks = props.posts.map(({ node }) => (
    <Link
      key={node.id}
      className="post-list-item"
      activeClassName="current-post"
      to={node.fields.slug}
    >
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
          <a
            href="https://twitter.com/kd_sherm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/kdsherm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="sidebar-post-navigation">
        <div className="post-list">{postLinks}</div>
      </div>
    </nav>
  );
};
