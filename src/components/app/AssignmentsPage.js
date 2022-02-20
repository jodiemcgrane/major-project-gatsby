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
        description {
          id
          text
        }
        information
        dueDate
        published_at
      }
    }
  }
`

const AssignmentsPage = () => {
  const data = useStaticQuery(query)
  const assignments = data.allStrapiAssignment.nodes

  return (
    <main className="page">
      <Assignments assignments={assignments} />
    </main>
  )
}

export default AssignmentsPage
