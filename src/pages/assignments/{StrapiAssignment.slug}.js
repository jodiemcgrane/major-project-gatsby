import React from "react"
import { graphql } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/layout"

//Atlas Components
import {
  Typography,
  Button,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@atlas-design-system/react"

const AssignmentTemplate = ({ data }) => {
  return (
    <div className="atls">
      <Layout>
        <div className="assignment-page">
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
            <div className="col-xs col-md-6">
              <Typography variant="displayText3">
                {data.strapiAssignment.title}
              </Typography>
              <div className="assignment-description-container">
                {data.strapiAssignment.description.map(description => {
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
              <div className="row middle-xs between-xs assignment-button">
                {data.strapiAssignment.journals.map(journal => {
                  if (journal.submitted === true) {
                    return (
                      <>
                        <Button
                          appearance="primary"
                          size="large"
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
                          appearance="primary"
                          size="large"
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
                          appearance="primary"
                          size="large"
                          onClick={function S() {}}
                        >
                          Start Journal
                        </Button>
                      </>
                    )
                  }
                })}
                <Typography variant="contentText2">
                  Due: {data.strapiAssignment.dueDate}
                </Typography>
              </div>
            </div>
            <div className="col-xs col-md-5 assignment-image">
              <StaticImage
                src="../../assets/images/contact-illustration.png"
                alt="Home Hero"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </div>
        <div className="page"></div>
      </Layout>
    </div>
  )
}

export const query = graphql`
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

export default AssignmentTemplate
