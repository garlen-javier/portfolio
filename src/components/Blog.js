import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const Blog = ({ id, title, featured_image, tags, url, excerpt }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className="blog" key={id}>
      <article>
        {featured_image && (
          <Image fluid={featured_image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{excerpt}</p>
          <div className="blog-footer">
            {tags.map(item => {
            return <span key={item.id}>{item.value}</span>
          })}
          </div>
        </div>
      </article>
    </a>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  excerpt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  featured_image: PropTypes.object.isRequired,
}

export default Blog
