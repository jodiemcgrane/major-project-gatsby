import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Assignments from "../Assignments"

//Atlas Components
import { Typography } from "@atlas-design-system/react"
import { IconCard, InformationV2Icon } from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiAssignment {
      nodes {
        id
        title
        introduction
        img {
          url
        }
        description {
          id
          text
        }
        dueDate
        published_at
        journals {
          id
          submitted
        }
        slug
      }
      totalCount
    }
  }
`

const AssignmentsPage = () => {
  const data = useStaticQuery(query)
  const assignments = data.allStrapiAssignment.nodes
  const total = data.allStrapiAssignment

  return (
    <div className="page">
      <div className="row assignments-page-header">
        <div className="col-md-5">
          <Typography variant="displayText4">
            Total Assignments ({total.totalCount})
          </Typography>
        </div>
      </div>

      <div className="row assignments-row">
        <div className="col-md-4 col-md-7">
          <Assignments assignments={assignments} />
        </div>
      </div>
    </div>
  )
}

export default AssignmentsPage
