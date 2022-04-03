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
                    LET YOU CAREER TAKE OFF
                  </Typography>
                </div>
              </div>
              {/* <div className="col-md-6">
                <StaticImage
                  src="../../assets/images/internship-experience.jpeg"
                  alt="Resources Hero"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div> */}
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
              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Annually, we run a 6-month internship comprised of four
                  pillars. The role, corporate social responsibility, learning
                  and development and intrapreneurship (see what we did there?)
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
                  They have a council dedicated to supporting and guiding them
                  along the way, whilst also providing challenges worthy of the
                  experience.
                </Typography>
              </div>

              <div className="row resources-text-space">
                <Typography variant="contentText1">
                  Our interns <b>always</b> tell us how pleasantly surprised
                  they are by the extent of exposure, responsibility and fun
                  (yes, really) they have here. As an intern, they are relied
                  upon to apply their skills and offer solutions to projects
                  that <b>matter!</b> They are a fully fledged Travelporter
                  right from the off.
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
