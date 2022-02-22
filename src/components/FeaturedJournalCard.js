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
          <div className="col-xs col-md-4">
            <div className="box">
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
              >
                <Typography variant="displayText6">{journal.title}</Typography>
                <div className="featured-journals-card-text">
                  <Typography variant="contentText1">
                    {journal.about}
                  </Typography>
                </div>
              </Card>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default FeaturedJournalCard