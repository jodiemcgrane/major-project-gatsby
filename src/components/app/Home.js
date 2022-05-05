import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import FeaturedJournalCard from "../FeaturedJournalCard"
import InternshipResources from "../InternshipResources"
import StudentResources from "../StudentResources"

//Atlas Components
import {
  Typography,
  Button,
  Tooltip,
  InformationIcon,
} from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiJournal(filter: { featured: { eq: true } }) {
      nodes {
        strapiId
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
          <div className="row between-xs">
            <div className="col-md-6 home-hero-section-left">
              <div className="home-hero-header">
                <Typography variant="displayText1">
                  Hi, {state.user.username}
                </Typography>
              </div>
              <div className="home-hero-text">
                <Typography variant="displayText5">
                  Ready to create more journals for your development portfolio
                  as an intern of Travelport? Get started now.
                </Typography>
              </div>
              <Link style={{ textDecoration: "none" }} to="/app/assignments">
                <Button appearance="primary" size="large">
                  View assignments
                </Button>
              </Link>
            </div>
            <div className="col-md-5">
              <StaticImage
                src="../../assets/images/pineapple-man-img.jpeg"
                alt="Home Hero"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED JOURNALS */}

      <div className="page">
        <div className="row center-xs middle-xs featured-journals-header">
          <Typography variant="displayText3">Featured Journals</Typography>
          <div className="featured-icon">
            <Tooltip
              content="Featured journals are journals you would like to add to the home page to feature them in your portfolio."
              placement="right"
            >
              <InformationIcon width={30} />
            </Tooltip>
          </div>
        </div>
        <div className="row featured-journal-display">
          <FeaturedJournalCard journals={journals} />
        </div>
        <div className="row center-xs middle-xs featured-journals-header">
          <Typography variant="displayText3">Helpful Resources</Typography>
        </div>
        <div className="row between-xs home-resources-section border">
          <InternshipResources />
        </div>
        <div className="row between-xs home-resources-section border">
          <StudentResources />
        </div>
      </div>
    </>
  )
}

export default Home
