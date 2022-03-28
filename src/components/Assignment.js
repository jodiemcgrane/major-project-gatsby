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
  description,
  dueDate,
  published_at,
  journals,
  slug,
}) => {
  return (
    <>
      <Card
        key={id}
        actionButtons={
          <ButtonGroup>
            <Link to={`/${slug}`} style={{ textDecoration: "none" }}>
              <Button appearance="primary" onClick={function S() {}}>
                View Assignment
              </Button>
            </Link>
            {journals.map(journal => {
              if (journal.submitted === true) {
                return (
                  <Link to={`/journals/${journal.id}`} style={{ textDecoration: "none" }}>
                    <Button
                      className="assignment-button"
                      appearance="secondary"
                      onClick={function S() {}}
                    >
                      View Journal
                    </Button>
                  </Link>
                )
              } else if (journal.submitted === false) {
                return (
                  <>
                    <Button
                      className="assignment-button"
                      appearance="secondary"
                      onClick={function S() {}}
                    >
                      Start Journal
                    </Button>
                  </>
                )
              } else {
                return (
                  <>
                    <Button
                      className="assignment-button"
                      appearance="secondary"
                      onClick={function S() {}}
                    >
                      Start Journal
                    </Button>
                  </>
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
                    appearance="success"
                    icon={<AuthorisedIcon />}
                    text="Journal Complete"
                  />
                </>
              )
            } else if (journal.submitted === false) {
              return (
                <>
                  <Lozenge
                    appearance="neutral"
                    icon={<NotStartedIcon />}
                    text="Journal Not Started"
                  />
                </>
              )
            }
          })}
        </div>

        <div className="row assignments-card-text">
          <Typography variant="contentText1">{introduction}</Typography>
        </div>
      </Card>
    </>
  )
}

export default Assignment
