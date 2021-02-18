import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Moment from 'react-moment';

const query = graphql`
  {
    allStrapiJobs(sort: { fields: start_date, order: DESC }) {
      nodes {
        strapiId
        position
        company
        start_date(formatString: "MMMM DD, YYYY")
        end_date{
          value
        }
        responsibilities {
          id
          value
        }
      }
    }
  }
`


const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const {position, company, start_date, end_date, responsibilities} = jobs[value]
  const endDate = (end_date[0].value === "Present") ? end_date[0].value : <Moment format="MMMM DD, YYYY">{end_date[0].value}</Moment>

  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
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
          <p className="job-date">{start_date + " - "}{endDate}</p>
          {responsibilities.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.value}</p>
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
