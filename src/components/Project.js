import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa"
import MDEditor from "@uiw/react-md-editor"

const Project = ({
  description,
  title,
  techStack,
  github,
  link,
  featuredImage,
}) => {
  return (
    <article className="project">
      {featuredImage && (
        <GatsbyImage
          image={featuredImage.gatsbyImageData}
          className="project-img" />
      )}
      <div className="project-info">
        {/* <span className="project-number">0{index + 1}.</span> */}
        <h3 className="project-title">{title || "default title"}</h3>
        <div className="project-desc">
          <MDEditor.Markdown source={description.childMarkdownRemark.html} style={{ backgroundColor: "white" }} />
        </div>
        <div className="project-stack">
          {techStack !== null && techStack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          {github !== null && (
            <a href={github}>
              <FaGithubSquare size={26} className="project-icon" />
            </a>
          )}
          {link !== null && (
            <a href={link}>
              <FaExternalLinkSquareAlt size={26} className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  featuredImage: PropTypes.object.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
