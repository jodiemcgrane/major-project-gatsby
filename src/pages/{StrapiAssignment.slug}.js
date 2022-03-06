import React from "react"
import { graphql } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//MomentJS
import moment from "moment"

//Components
import Layout from "../components/layout"
import CreateJournal from "../components/CreateJournal"

//Atlas Components
import {
  Typography,
  Button,
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
              <Button
                icon={<ArrowLeftIcon />}
                size="large"
                onClick={function S() {}}
              >
                Back to Assignments
              </Button>
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

          <div className="row rich-text-display">
            <div className="col-md-6">
              <CreateJournal />
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
