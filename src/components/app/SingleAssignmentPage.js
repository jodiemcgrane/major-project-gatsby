import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { useParams } from "@reach/router"

const query = graphql`
  query getSingleAssignment($slug: String) {
    strapiAssignment(slug: { eq: $slug }) {
      title
      introduction
      description {
        id
        text
      }
      dueDate
      journals {
        id
        submitted
      }
    }
  }
`

const SingleAssignmentPage = () => {
  const { slug } = useParams()
  const data = useStaticQuery(query, {
    variables: { slug: slug },
  })

  console.log(data)

  return <>
    <h3>{data.strapiAssignment.title}</h3>
  </>
}

export default SingleAssignmentPage
