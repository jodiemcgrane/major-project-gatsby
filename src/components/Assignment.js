import React from "react"
import { Link } from "gatsby"

//Atlas Components
import {
  Card,
  ButtonGroup,
  Button,
  Typography,
  Lozenge,
  NotStartedIcon,
  AuthorisedIcon,
} from "@atlas-design-system/react"

const Assignment = ({
  id,
  title,
  introduction,
  img: { url },
  journals,
  slug,
}) => {
  let lozenge

  if (journals.length === 0) {
    lozenge = (
      <Lozenge
        appearance="neutral"
        icon={<NotStartedIcon />}
        text="Journal Not Started"
      />
    )
  }
  return (
    <>
      <Card
        key={id}
        actionButtons={
          <ButtonGroup>
            <Link
              to={`/assignments/${slug}`}
              style={{ textDecoration: "none" }}
            >
              <Button appearance="primary">View Assignment</Button>
            </Link>
            {journals.map(journal => {
              if (journal.submitted === true) {
                return (
                  <Link
                    to={`/journals/${journal.id}`}
                    style={{ textDecoration: "none" }}
                    key={journal.id}
                  >
                    <Button
                      className="assignment-button"
                      appearance="secondary"
                    >
                      View Journal
                    </Button>
                  </Link>
                )
              }
            })}
          </ButtonGroup>
        }
        image={url}
        imageAlt={title}
        layout="horizontal"
        className="assignments-card"
      >
        <div className="row between-xs">
          <Typography variant="displayText6">{title}</Typography>
          {journals.map(journal => {
            if (journal.submitted === true) {
              return (
                <>
                  <Lozenge
                    key={journal.id}
                    appearance="success"
                    icon={<AuthorisedIcon />}
                    text="Journal Complete"
                  />
                </>
              )
            } 
          })}
          {lozenge}
        </div>

        <div className="row assignments-card-text">
          <Typography variant="contentText1">{introduction}</Typography>
        </div>
      </Card>
    </>
  )
}

export default Assignment
