import React from "react"
import { graphql } from "gatsby"

const AssignmentTemplate = ({ data }) => {
  return (
    <div>
      <h4>{data.strapiAssignment.title}</h4>
      <p>{data.strapiAssignment.introduction}</p>
    </div>
  )
}

export const query = graphql`
  query getSingleAssignment($slug: String) {
    strapiAssignment(slug: { eq: $slug }) {
      title
      introduction
    }
  }
`

export default AssignmentTemplate
