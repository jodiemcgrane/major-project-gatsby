import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

//Components
import Assignments from "../Assignments"

//Atlas Components
import {
  Typography,
  IconCard,
  MissegIcon,
  EditIcon,
  PersonIcon,
  ThumbsUpIcon,
} from "@atlas-design-system/react"

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
    <>
      <div className="home-hero">
        <div className="home-page">
          <div className="row between-xs">
            <div className="col-md-6 home-hero-section-left">
              <div className="home-hero-header">
                <Typography variant="displayText2">
                  Intern Assignments
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="displayText5">
                  Each assignment covers a main point in the portfolio.
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="home-hero-section-left">
                <Typography variant="displayText4">Some Tips...</Typography>
                <div className="assignment-tips tips-top-space">
                  <MissegIcon width="25" />
                  <Typography variant="contentText1">
                    Make sure your ducks are in a row - try to be as organised
                    as possible
                  </Typography>
                </div>
                <div className="assignment-tips">
                  <ThumbsUpIcon width="25" />
                  <Typography variant="contentText1">
                    Ensure you highlight your working/learning process and
                    progress
                  </Typography>
                </div>
                <div className="assignment-tips">
                  <PersonIcon width="25" />
                  <Typography variant="contentText1">
                    Every skill is important whether it is a soft skill or a
                    technical one
                  </Typography>
                </div>
                <div className="assignment-tips">
                  <EditIcon width="25" />
                  <Typography variant="contentText1">
                    Reflect even on the smallest piece of work you completed
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="row between-xs middle-xs assignments-page-header">
          <div>
            <Typography variant="displayText4">
              Total Assignments ({total.totalCount})
            </Typography>
          </div>
          <div className="journal-icon-card">
            <Link
              style={{ textDecoration: "none" }}
              to="/app/journals"
            >
              <IconCard
                description="View the latest journals you have completed"
                heading="Journals"
                icon={<EditIcon />}
              />
            </Link>
          </div>
        </div>

        <div className="row assignments-row">
          <div className="col-md-4 col-md-8">
            <Assignments assignments={assignments} />
          </div>
        </div>
      </div>
      <div className="page-bottom"></div>
    </>
  )
}

export default AssignmentsPage
