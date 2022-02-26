import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

//Atlas Components
import {
  Card,
  ButtonGroup,
  Button,
  Typography,
  Lozenge,
} from "@atlas-design-system/react"

const Assignment = ({
  id,
  title,
  introduction,
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
            <Link
              to={`/assignments/${slug}`}
              style={{ textDecoration: "none" }}
            >
              <Button appearance="primary" onClick={function S() {}}>
                View Assignment
              </Button>
            </Link>
            {journals.map(journal => {
              if (journal.submitted === true) {
                return (
                  <>
                    <Button appearance="tertiary" onClick={function S() {}}>
                      View Journal
                    </Button>
                  </>
                )
              } else if (journal.submitted === false) {
                return (
                  <>
                    <Button appearance="tertiary" onClick={function S() {}}>
                      Continue Journal
                    </Button>
                  </>
                )
              } else {
                return (
                  <>
                    <Button appearance="tertiary" onClick={function S() {}}>
                      Start Journal
                    </Button>
                  </>
                )
              }
            })}
          </ButtonGroup>
        }
        image="https://assets.gettyimages.com/bf-boulder-whitelabelbucket-getty-prod/9993rcbjms9pw65wsrts8pqx/v/1015924856/original/Travelport%20Illustrations_Contact.png"
        imageAlt={title}
        layout="horizontal"
        className="col-xs-12 col-md-8 col-sm-4 assignments-card"
      >
        <div className="row between-xs">
          <Typography variant="displayText6">{title}</Typography>
          {journals.map(journal => {
            if (journal.submitted === true) {
              return (
                <>
                  <Lozenge appearance="success" text="Journal Complete" />
                </>
              )
            } else if (journal.submitted === false) {
              return (
                <>
                  <Lozenge appearance="warning" text="Journal In Progress" />
                </>
              )
            } else {
              return (
                <>
                  <Lozenge appearance="neutral" text="Journal Not Started" />
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
