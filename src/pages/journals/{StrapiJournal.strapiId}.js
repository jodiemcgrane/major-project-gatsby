import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//MomentJS
import moment from "moment"

//Components
import Layout from "../../components/Layout"

//Atlas Components
import {
  Typography,
  ButtonGroup,
  Button,
  Card,
  Lozenge,
  TrashIcon,
  EditIcon,
  ArrowRightIcon,
} from "@atlas-design-system/react"

const JournalTemplate = ({ data }) => {
  const journal = data.strapiJournal

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row middle-xs single-journal-buttons">
            <div className="col-xs">
              {journal.submitted ? (
                <Lozenge appearance="success" text="Submitted" />
              ) : (
                <Lozenge appearance="warning" text="Not Submitted" />
              )}
            </div>
            <div className="row between-xs">
              <div className="col-md-4">
                <ButtonGroup>
                  <Button
                    appearance="secondary"
                    size="small"
                    icon={<EditIcon />}
                    iconAlign="right"
                  >
                    Edit
                  </Button>
                  <Button
                    appearance="destructive"
                    size="small"
                    icon={<TrashIcon />}
                    iconAlign="right"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="row between-xs middle-xs single-journal-title">
            <div className="col-md-7">
              <Typography variant="displayText2">{journal.title}</Typography>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 single-journal-about">
              <Typography variant="displayText5">{journal.about}</Typography>
            </div>
          </div>

          <div className="row between-xs">
            <div className="col-xs col-md-7">
              <Typography variant="contentText1">
                {moment(journal.published_at).format("LL")}
              </Typography>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 single-journal-text">
              <Typography variant="contentText1">{journal.text}</Typography>
            </div>
          </div>

          <div className="row">
            <div className="col-xs col-md-4">
              <Typography variant="contentText1">
                Written by {journal.user.username}
              </Typography>
            </div>
          </div>
          <div className="row assignment-display">
            <div className="col-xs col-md-11 journal-assignment-card">
              <Card
                layout="horizontal"
                image={journal.assignment.img.url}
                actionButtons={
                  <ButtonGroup>
                    <Button appearance="primary">View All Assignments</Button>
                  </ButtonGroup>
                }
              >
                <div className="row between-xs">
                  <div className="assignment-heading">
                    <Typography variant="displayText2">
                      {journal.assignment.title}
                    </Typography>
                  </div>
                  <div className="assignment-due-date">
                    <Typography variant="contentText1">
                      Due: {moment(journal.assignment.dueDate).format("LL")}
                    </Typography>
                  </div>

                  <div className="row">
                    <div className="assignment-intro">
                      <Typography variant="displayText5">
                        {journal.assignment.introduction}
                      </Typography>
                    </div>
                  </div>

                  <div>
                  {journal.assignment.description.map(description => {
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
  query getSingleJournal($strapiId: Int) {
    strapiJournal(strapiId: { eq: $strapiId }, submitted: { eq: true }) {
      id
      strapiId
      title
      about
      text
      submitted
      featured
      published_at
      assignment {
        id
        title
        introduction
        description {
          id
          text
        }
        dueDate
        published_at
        img {
          url
        }
      }
      user {
        id
        username
      }
    }
  }
`

export default JournalTemplate
