import React from "react"
import { Link } from "gatsby"

//MomentJS
import moment from "moment"

//Atlas Components
import {
  Card,
  ButtonGroup,
  Button,
  Typography,
  Lozenge,
  NotesIllustration,
} from "@atlas-design-system/react"

const Journal = ({
  id,
  strapiId,
  title,
  about,
  submitted,
  featured,
  published_at,
  user: { username },
  assignment,
}) => {
  let button
  let lozenge

  if (submitted === true) {
    button = (
      <Link to={`/journals/${strapiId}`} style={{ textDecoration: "none" }}>
        <Button appearance="primary">
          View
        </Button>
      </Link>
    )
    lozenge = (
      <>
        <Lozenge appearance="success" text="Journal Complete" />
      </>
    )
  } else if (submitted === false) {
    button = (
      <Link style={{ textDecoration: "none" }}>
        <Button appearance="primary" onClick={function S() {}}>
          Continue
        </Button>
      </Link>
    )
    lozenge = (
      <>
        <Lozenge appearance="warning" text="Journal In Progress" />
      </>
    )
  } else {
    button = (
      <>
        <Button appearance="primary" onClick={function S() {}}>
          Start
        </Button>
      </>
    )
    lozenge = (
      <>
        <Lozenge appearance="neutral" text="Journal Not Started" />
      </>
    )
  }

  return (
    <>
      <Card
        key={id}
        actionButtons={
          <ButtonGroup>
            {button}
            <Button appearance="secondary" className="assignment-button">View Assignment</Button>
          </ButtonGroup>
        }
        illustration={<NotesIllustration />}
        className="col-xs col-md-5 journals-card-space"
      >
        <div className="row between-xs">
          <Typography variant="displayText6">{title}</Typography>
          {lozenge}
        </div>
        <div className="row journals-about">
          <Typography variant="contentText1">{about}</Typography>
        </div>
        <div className="row between-xs middle-xs">
          <Typography variant="contentText2">{username}</Typography>
          <Typography variant="contentText2">
            {moment(published_at).format("LL")}
          </Typography>
        </div>
      </Card>
    </>
  )
}

export default Journal
