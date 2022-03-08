import React from "react"

//MomentJS
import moment from "moment"

//Components
import Layout from "../../components/layout"
import CreateJournal from "../../components/CreateJournal"

//Atlas Components
import {
  Typography,
  Button,
  Input,
  ButtonGroup,
  Card,
  ArrowRightIcon,
  NotesIllustration,
} from "@atlas-design-system/react"

//Hooks
import useAuth from "../../hooks/useAuth"

const CreateJournalPage = ({ location }) => {
  const assignment = location.state.assignment
  //console.log(location.state.assignment)

  const { state } = useAuth()

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row between-xs">
            <div className="col-xs col-md-12 assignment-card create-journal-assignment">
              <Card layout="horizontal" image={assignment.img.url}>
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

          <div className="end-page-padding">
            <div className="create-container">
              <div className="row middle-xs create-journal-header">
                <NotesIllustration />
                <div className="create-journal-header-text">
                  <Typography variant="displayText3">Create Journal</Typography>
                </div>
              </div>
              <div>
                <CreateJournal state={state} assignment={assignment} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CreateJournalPage
