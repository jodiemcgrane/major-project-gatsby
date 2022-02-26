import React from "react"
import { Link } from "gatsby"

//Components
import {
  Card,
  ButtonGroup,
  Button,
  Typography,
  NotesIllustration,
} from "@atlas-design-system/react"

const FeaturedJournalCard = ({ journals }) => {
  return (
    <>
      {journals.map(journal => {
        return (
          <Card
            key={journal.id}
            onClick={function S() {}}
            actionButtons={
              <ButtonGroup>
                <Button appearance="primary" onClick={function S() {}}>
                  See More
                </Button>
              </ButtonGroup>
            }
            illustration={<NotesIllustration />}
            className="col-xs-12 col-sm-3 featured-journals-card-space"
          >
            <Typography variant="displayText6">{journal.title}</Typography>
            <div className="featured-journals-card-text">
              <Typography variant="contentText1">{journal.about}</Typography>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default FeaturedJournalCard
