//Resources Page

import React from "react"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/Layout"

//Atlas Components
import { Typography } from "@atlas-design-system/react"

const InternshipExperience = () => {
  return (
    <div className="atls">
      <Layout>
        <div className="resources-hero">
          <div className="home-page">
            <div className="row resources-hero-display">
              <div className="home-hero-section-left">
                <div className="home-hero-header resources-hero-text">
                  <Typography variant="displayText7">
                    DUBLIN INTERNSHIP PROGRAMME
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <Typography variant="heroText">
                    LET YOUR CAREER TAKE OFF
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page resources-page">
          <div className="row">
            <div className="col-md-6">
              <StaticImage
                src="../../assets/images/internship-experience-2.jpeg"
                alt="Resources Image"
                placeholder="blurred"
                layout="constrained"
              />
            </div>

            <div className="col-md-6">
              <div className="row program-about">
                <Typography variant="displayText6">
                  About the programme
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Annually, we run a 6-month (Jan – July) internship out of our
                  Dublin office where Interns become a fully fledged
                  Travelporter and work alongside a team of talented
                  professionals.
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  We take ambitious students and offer them the opportunity to
                  participate in an immersive and rewarding internship like no
                  other.
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Our Dublin internship program is an experience like no other
                  and we always look to bring back those who succeed after
                  graduation.
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Historically, our Dublin internships have been technology
                  focused, with students coming in as Software Development
                  Interns, however we are looking to expand.
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Our interns <b>always</b> tell us how pleasantly surprised
                  they are by the extent of exposure, responsibility and fun
                  (yes, really) they have here.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default InternshipExperience
