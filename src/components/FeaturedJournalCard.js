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
    <div>
      {journals.map(journal => {
        return (
          <Card
            key={journal.id}
            onClick={function S() {
              ;<Link to="/"></Link>
            }}
            actionButtons={
              <ButtonGroup>
                <Button
                  appearance="primary"
                  onClick={function S() {
                    ;<Link to="/"></Link>
                  }}
                >
                  See More
                </Button>
              </ButtonGroup>
            }
            illustration={<NotesIllustration />}
          >
            <Typography variant="displayText6">{journal.title}</Typography>
            <div className="featured-card-text">
              <Typography variant="contentText1">{journal.about}</Typography>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default FeaturedJournalCard
