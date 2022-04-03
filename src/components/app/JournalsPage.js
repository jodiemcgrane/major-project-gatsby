import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import Journals from "../Journals"

//Atlas Components
import { Typography, IconCard, EditIcon } from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiJournal {
      nodes {
        id
        strapiId
        title
        about
        submitted
        featured
        published_at
        user {
          username
        }
        assignment {
          id
          title
        }
      }
      totalCount
    }
  }
`

const JournalsPage = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes
  const total = data.allStrapiJournal

  return (
    <>
      <div className="home-hero">
        <div className="home-page">
          <div className="row between-xs">
            <div className="col-md-6 home-hero-section-left">
              <div className="home-hero-header">
                <Typography variant="displayText2">
                  Intern Development Portfolio
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="displayText5">
                  Keep your journals all in the one place.
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="contentText1">
                  If you are struggling with your Development Portfolio, use
                  your support network.
                </Typography>
              </div>
            </div>
            <div className="col-md-5">
              <StaticImage
                src="../../assets/images/boy-beach.jpeg"
                alt="Home Hero"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="row between-xs middle-xs journals-page-header">
          <div>
            <Typography variant="displayText4">
              Total Journals ({total.totalCount})
            </Typography>
          </div>
          <div className="assignment-icon-card">
            <Link
              style={{ textDecoration: "none" }}
              to="/app/assignments"
            >
              <IconCard
                description="Ready to start a new assignment?"
                heading="Assignments"
                icon={<EditIcon />}
              />
            </Link>
          </div>
        </div>

        <div className="row journals-display">
          <Journals journals={journals} />
        </div>

        <div className="page-bottom"></div>
      </div>
    </>
  )
}

export default JournalsPage
