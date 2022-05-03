import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//MomentJS
import moment from "moment"

//Components
import Layout from "../../components/layout"

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
  console.log(assignment)

  let button

  if (assignment.journals.length === 0) {
    button = (
      <Link
        style={{ textDecoration: "none" }}
        to="/journals/create"
        state={{ assignment }}
      >
        <Button appearance="primary">Start Journal</Button>
      </Link>
    )
  }

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
                          <Link
                            to={`/journals/${journal.id}`}
                            style={{ textDecoration: "none" }}
                            key={journal.id}
                          >
                            <Button
                              className="assignment-button"
                              appearance="primary"
                            >
                              View Journal
                            </Button>
                          </Link>
                        )
                      }
                    })}
                    {button}
                  </ButtonGroup>
                }
              >
                <div className="row between-xs">
                  <div className="assignment-heading">
                    <Typography variant="displayText2">
                      {assignment.title}
                    </Typography>
                  </div>
                  <div className="assignment-due-date">
                    <Typography variant="contentText1">
                      Due: {moment(assignment.dueDate).format("LLL")}
                    </Typography>
                  </div>
                </div>

                <div className="row">
                  <div className="assignment-intro">
                    <Typography variant="displayText5">
                      {assignment.introduction}
                    </Typography>
                  </div>
                </div>

                <div>
                  {assignment.description.map(description => {
                    return (
                      <div className="assignment-description" key={assignment.id}>
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
      slug
    }
  }
`

export default AssignmentTemplate
