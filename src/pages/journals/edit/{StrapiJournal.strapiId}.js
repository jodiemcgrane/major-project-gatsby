//Edit Journal Page

import React from "react"

//MomentJS
import moment from "moment"

//Components
import Layout from "../../../components/layout"
import EditJournal from "../../../components/EditJournal"

//Atlas Components
import {
  Typography,
  Card,
  ArrowRightIcon,
  NotesIllustration,
} from "@atlas-design-system/react"

const EditJournalPage = ({ location }) => {
  const journal = location.state.journal
  //console.log(journal)

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row between-xs">
            <div className="col-xs col-md-12 assignment-card create-journal-assignment">
              <Card layout="horizontal" image={journal.assignment.img.url}>
                <div className="row between-xs">
                  <div className="assignment-heading">
                    <Typography variant="displayText3">
                      {journal.assignment.title}
                    </Typography>
                  </div>

                  <div className="assignment-due-date">
                    <Typography variant="contentText2">
                      {moment(journal.assignment.dueDate).format("LLL")}
                    </Typography>
                  </div>
                </div>

                <div className="row">
                  <div className="assignment-intro">
                    <Typography variant="displayText6">
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
              </Card>
            </div>
          </div>

          <div className="end-page-padding">
            <div className="create-container">
              <div className="row middle-xs create-journal-header">
                <NotesIllustration />
                <div className="create-journal-header-text">
                  <Typography variant="displayText3">Edit Journal</Typography>
                </div>
              </div>
              <div>
                <EditJournal journal={journal} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default EditJournalPage
