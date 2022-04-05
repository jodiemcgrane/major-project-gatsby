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

        <div className="page">
          <div className="section">
            <div className="row">
              <div className="col-md-7">
                <Typography variant="displayText3">
                  10 Tips to Help Transiton from Student to Profressional Life
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 tips-heading">
                <Typography variant="displayText6">1. Communication</Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 tips-paragraph">
                <Typography variant="contentText1">
                  If you need more time to finish a project or need more
                  guidance on your, communicate with your team.Communicating
                  with your team and amnager will alleviate some of the anxierty
                  and stress of starting your work here as an intern. Don't be
                  afraid to ask for help if you need it. On the flip side, if
                  you find that you have underestimated your workload, consult
                  with your team to find more work, as you know they are a
                  talented team of profressionals!
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 tips-heading">
                <Typography variant="displayText6">2. Communication</Typography>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default StudentToWork
