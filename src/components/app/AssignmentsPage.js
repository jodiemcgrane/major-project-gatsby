import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Assignments from "../Assignments"

const query = graphql`
  {
    allStrapiAssignment {
      nodes {
        id
        title
        introduction
        description {
          id
          text
        }
        dueDate
        published_at
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

const AssignmentsPage = () => {
  const data = useStaticQuery(query)
  const assignments = data.allStrapiAssignment.nodes

  return (
    <div className="page">
      <Assignments assignments={assignments} />
    </div>
  )
}

export default AssignmentsPage
