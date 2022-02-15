//Component for retrieving ALL assignments from GraphQL

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

//Components
import AssignmentsList from "./AssignmentsList"

const query = graphql`
  {
    allStrapiAssignment {
      nodes {
        title
        information
        description {
          id
          text
        }
        dueDate
      }
    }
  }
`

const AllAssignments = () => {
  const data = useStaticQuery(query)
  const assignments = data.allStrapiAssignment.nodes

  return (
    <div>
      <AssignmentsList assignments={assignments} />
    </div>
  )
}

export default AllAssignments
