import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"
import MDEditor from "@uiw/react-md-editor"

const Project = ({description, title,tech_stack, link, featured_image}) => {
  return (
    <article className="project">
      {featured_image && (
        <Image fluid={featured_image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        {/* <span className="project-number">0{index + 1}.</span> */}
        <h3 className="project-title">{title || "default title"}</h3>
        <p className="project-desc">
        <MDEditor.Markdown source={description} />
        </p>
        <div className="project-stack">
          {tech_stack.map(item => {
            return <span key={item.id}>{item.value}</span>
          })}
        </div>
        <div className="project-links">
          <a href={link}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featured_image: PropTypes.object.isRequired,
  tech_stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
