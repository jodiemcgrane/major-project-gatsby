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
                  5 Tips to Help Transiton from Student to Profressional Life
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
                <Typography variant="displayText6">
                  2. Try Not to Feel Intimidated
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 tips-paragraph">
                <Typography variant="contentText1">
                  During your time as a student, the only people you probably
                  would have come across regularly were in more of a 'senior'
                  position to you were your lecturers. At Travelport, you will
                  come across people who are much older than you, especially in
                  more senior posititons - possibily positions you could be in
                  one day! Try not to feel initmidated by this, see it as an
                  opportunity to learn from people who are more than happy to
                  share their skills and pass them onto you. Everyone has to
                  start somewhere.
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 tips-heading">
                <Typography variant="displayText6">3. Networking</Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 tips-paragraph">
                <Typography variant="contentText1">
                  Networking is extremely important and useful for graduates and
                  future graduates. Not only do you have your lecturers and
                  classmates as people in your network. At Travelport, you will
                  find a lot more, especially during your internship. Talk to as
                  many people as you can about your aspirations, you never know
                  what advice or help you may receive. It is also a good way to
                  listen out for employment if it is something you will be
                  interested in after completing your internship. That goes to
                  your online presence! Make sure your online presence is
                  presentable. Keep yourself respectable on all social platforms
                  and the connection you make in person, connect with them
                  online too.
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 tips-heading">
                <Typography variant="displayText6">
                  4. Make Your Mark
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 tips-paragraph">
                <Typography variant="contentText1">
                  Don't wait for things to happen, make them happen. Get
                  involved, throw yourseld into the work assigned and show you
                  enthusiasm. Speak up and don't be afraid to voice your
                  opinions and ideas. Set yourself some long-term and short-term
                  goals while your'e with us at Travelport! Be honest with
                  yourself and improve where you think you should. Use your
                  intern development portfolio to discuss your goals.
                </Typography>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 tips-heading">
                <Typography variant="displayText6">
                  5. Get into a Routine
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 tips-paragraph">
                <Typography variant="contentText1">
                  As a student, it is easy to fall into irregular sleeping
                  habits. When working a job with regular hour, though, that is
                  a bit harder to maintain and will definitley affect your
                  productivity. Train yourself to get into the habit of getting
                  up early every day of the week at the same times scheduled.
                </Typography>
              </div>
            </div>
          </div>
          <div className="page-bottom"></div>
        </div>
      </Layout>
    </div>
  )
}

export default StudentToWork
