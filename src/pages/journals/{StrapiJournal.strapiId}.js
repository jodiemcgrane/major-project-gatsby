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
  Lozenge,
  TrashIcon,
  EditIcon,
} from "@atlas-design-system/react"

const JournalTemplate = ({ data }) => {
  const journal = data.strapiJournal

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row between-xs middle-xs single-journal-title">
            <div className="col-md-7">
              <Typography variant="displayText2">{journal.title}</Typography>
            </div>
            <div>
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

            {/* {journal.submitted ? (
              <Lozenge appearance="success" text="Submitted" />
            ) : (
              <Lozenge appearance="warning" text="Not Submitted" />
            )} */}
          </div>

          <div className="row">
            <div className="col-md-7 single-journal-about">
              <Typography variant="displayText5">{journal.about}</Typography>
            </div>
          </div>

          <div className="row">
            <div className="col-xs col-md-4">
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
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query getSingleJournal($strapiId: Int) {
    strapiJournal(strapiId: { eq: $strapiId }) {
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
        slug
      }
      user {
        id
        username
      }
    }
  }
`

export default JournalTemplate
