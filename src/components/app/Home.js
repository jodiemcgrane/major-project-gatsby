import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import FeaturedJournalCard from "../FeaturedJournalCard"
import { Typography, Button } from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiJournal(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        about
        featured
        published_at
        user {
          username
        }
      }
    }
  }
`

const Home = ({ state }) => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes

  return (
    <>
      <div className="home-hero">
        <div className="home-page">
          <div className="row">
            <div className="col-md-6 home-hero-section-left">
              <div className="home-hero-header">
                <Typography variant="displayText2">
                  Hi, {state.user.username}
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="displayText5">
                  I'm baby man bun chartreuse 8-bit, hashtag XOXO literally
                  austin locavore ramps adaptogen messenger bag.
                </Typography>
              </div>
              <Button appearance="primary" size="large">
                View Assignments
              </Button>
            </div>
            <div className="col-md-6">
            {/* <StaticImage
                src="../assets/images/travelport-logo.png"
                alt="Logo"
                as="section"
                placeholder="blurred"
                layout="constrained"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED JOURNALS */}

      <div className="page">
        <div className="row center-xs middle-xs featured-journals-header">
          <Typography variant="displayText3">Featured Journals</Typography>
        </div>
        <div className="row">
          <FeaturedJournalCard journals={journals} />
        </div>
        <div className="row center-xs middle-xs featured-journals-header">
          <Typography variant="displayText3">Helpful Resources</Typography>
        </div>
      </div>
    </>
  )
}

export default Home
