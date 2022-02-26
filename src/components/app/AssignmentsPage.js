import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Assignments from "../Assignments"

//Atlas Components
import { Typography } from "@atlas-design-system/react"

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
        journals {
          id
          submitted
        }
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
        <div className="col-md-4">
          <Typography variant="displayText3">
            Assignments ({total.totalCount})
          </Typography>
        </div>
      </div>
      <div className="row assignments-page-introduction">
        <div className="col-md-6">
          <Typography variant="displayText5">
            Literally shoreditch yr try-hard four dollar toast. Ennui man bun
            vape kickstarter ethical forage slow-carb cornhole hella occupy
            meggings typewriter letterpress post-ironic.
          </Typography>
        </div>
      </div>

      <Assignments assignments={assignments} />
    </div>
  )
}

export default AssignmentsPage
