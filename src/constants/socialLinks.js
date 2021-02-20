import React from "react"
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/garlen-javier",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/meekcode",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/meek_code",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/garlen-javier",
  },
  {
    id: 5,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:garlen.javier@meekcode.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
