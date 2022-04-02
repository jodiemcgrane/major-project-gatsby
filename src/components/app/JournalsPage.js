import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import Journals from "../Journals"

//Atlas Components
import { Typography } from "@atlas-design-system/react"

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
                  Journal Awesomeness
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="displayText5">
                  Some introduction text about the journals page wriiten here.
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="contentText1">
                  Some introduction text about the journals page wriiten here.
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
        <div className="row journals-page-header">
          <div className="col-md-6">
            <Typography variant="displayText3">
              Journals ({total.totalCount})
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 journals-page-introduction">
            <Typography variant="displayText5">
              Literally shoreditch yr try-hard four dollar toast. Ennui man bun
              vape kickstarter ethical forage slow-carb cornhole hella occupy.
            </Typography>
          </div>
        </div>
        <div className="row journals-row journals-display">
          <div className="col-md-4 col-md-9">
            <Journals journals={journals} />
          </div>
        </div>
      </div>
    </>
  )
}

export default JournalsPage
