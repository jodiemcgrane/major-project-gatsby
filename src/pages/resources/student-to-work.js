import React from "react"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/Layout"

//Atlas Components
import { Typography } from "@atlas-design-system/react"

const StudentToWork = () => {
  return (
    <div className="atls">
      <Layout>
        <div className="home-hero">
          <div className="home-page">
            <div className="row between-xs">
              <div className="col-md-6 home-hero-section-left">
                <div className="home-hero-header">
                  <Typography variant="displayText2">
                    Student to Work Transition
                  </Typography>
                </div>
                <div className="home-hero-text">
                  <Typography variant="displayText5">
                    A space to help you transition from your completed studies
                    to work.
                  </Typography>
                </div>
              </div>
              <div className="col-md-5">
                <StaticImage
                  src="../../assets/images/home-resources-2.jpeg"
                  alt="Home Hero"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="page"></div>
      </Layout>
    </div>
  )
}

export default StudentToWork
