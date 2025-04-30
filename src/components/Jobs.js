import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
// import Moment from 'react-moment';

const query = graphql`
  {
    allContentfulJobs(sort: {startDate: DESC}) {
      nodes {
        id
        position
        company
        startDate(formatString: "MMMM DD, YYYY")
        endDate(formatString: "MMMM DD, YYYY")
        responsibilities
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allContentfulJobs: { nodes : jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const {position, company, startDate, endDate, responsibilities} = jobs[value]
  const endDateStr = (endDate === null) ? "Present" : endDate

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => { 
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{startDate + " - "}{endDateStr}</p>
          {responsibilities.map((item, index) => { 
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
