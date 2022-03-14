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
            actionButtons={
              <ButtonGroup>
                <Link to={`/journals/${journal.strapiId}`} style={{ textDecoration: "none" }}>
                  <Button appearance="primary">
                    See More
                  </Button>
                </Link>
              </ButtonGroup>
            }
            illustration={<NotesIllustration />}
            className="col-xs col-md-5 featured-journals-card-space"
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
