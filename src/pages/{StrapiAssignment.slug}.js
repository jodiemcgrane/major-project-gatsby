import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//MomentJS
import moment from "moment"

//Components
import Layout from "../components/layout"

//Atlas Components
import {
  Typography,
  Button,
  Input,
  ButtonGroup,
  Card,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@atlas-design-system/react"

const AssignmentTemplate = ({ data }) => {
  const assignment = data.strapiAssignment

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row back-to-assignments-button">
            <div className="col-xs">
              <Link style={{ textDecoration: "none" }} to="/app/assignments">
                <Button
                  icon={<ArrowLeftIcon />}
                  size="large"
                  onClick={function S() {}}
                >
                  Back to Assignments
                </Button>
              </Link>
            </div>
          </div>
          <div className="row between-xs">
            <div className="col-xs col-md-12 assignment-card">
              <Card
                layout="horizontal"
                image={assignment.img.url}
                actionButtons={
                  <ButtonGroup>
                    {assignment.journals.map(journal => {
                      if (journal.submitted === true) {
                        return (
                          <>
                            <Button
                              className="assignment-button"
                              appearance="primary"
                              onClick={function S() {}}
                            >
                              View Journal
                            </Button>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/app/assignments"
                            >
                              <Button appearance="secondary">
                                New Journal
                              </Button>
                            </Link>
                          </>
                        )
                      } else if (journal.submitted === false) {
                        return (
                          <>
                            <Button
                              className="assignment-button"
                              appearance="primary"
                              onClick={function S() {}}
                            >
                              Continue Journal
                            </Button>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/app/assignments"
                            >
                              <Button appearance="secondary">
                                New Journal
                              </Button>
                            </Link>
                          </>
                        )
                      } else {
                        return (
                          <>
                            <Button
                              className="assignment-button"
                              appearance="primary"
                              onClick={function S() {}}
                            >
                              Start Journal
                            </Button>
                          </>
                        )
                      }
                    })}
                  </ButtonGroup>
                }
              >
                <div className="row between-xs">
                  <div className="assignment-heading">
                    <Typography variant="displayText3">
                      {assignment.title}
                    </Typography>
                  </div>
                  <div className="assignment-due-date">
                    <Typography variant="contentText2">
                      {moment(assignment.dueDate).format("LLL")}
                    </Typography>
                  </div>
                </div>

                <div className="row">
                  <div className="assignment-intro">
                    <Typography variant="displayText6">
                      {assignment.introduction}
                    </Typography>
                  </div>
                </div>

                <div>
                  {assignment.description.map(description => {
                    return (
                      <div className="assignment-description">
                        <ArrowRightIcon width="25" />
                        <Typography variant="contentText1">
                          {description.text}
                        </Typography>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query getSingleAssignment($slug: String) {
    strapiAssignment(slug: { eq: $slug }) {
      id
      strapiId
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
      journals {
        id
        submitted
      }
    }
  }
`

export default AssignmentTemplate
