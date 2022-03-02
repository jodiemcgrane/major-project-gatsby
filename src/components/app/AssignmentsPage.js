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
            Assignments ({total.totalCount})
          </Typography>
        </div>
      </div>
      <div className="row between-xs assignments-page-introduction">
        <div className="col-md-7">
          <Typography variant="displayText5">
            Literally shoreditch yr try-hard four dollar toast. Ennui man bun
            vape kickstarter ethical forage slow-carb cornhole hella occupy.
          </Typography>
        </div>
        <div className="col-md-4">
          <IconCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            heading="Need tips on writing?"
            icon={<InformationV2Icon />}
            onClick={function S() {}}
          />
        </div>
      </div>

      <div className="row assignment-row">
        <div className="col-md-4 col-md-7">
          <Assignments assignments={assignments} />
        </div>
      </div>
    </div>
  )
}

export default AssignmentsPage
