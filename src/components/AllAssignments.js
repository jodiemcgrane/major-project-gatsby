//Component for retrieving ALL assignments from GraphQL

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

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

  return <div></div>
}

export default AllAssignments
