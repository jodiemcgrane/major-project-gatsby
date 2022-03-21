import React from "react"
import { Link } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Atlas Components
import { Typography, Button } from "@atlas-design-system/react"

const StudentResources = () => {
  return (
    <>
      <div className="col-md-4">
        <StaticImage
          src="../assets/images/home-resources-2.jpeg"
          alt="Home Resources"
          as="section"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
      <div className="col-md-7">
        <div className="row home-resources-heading">
          <Typography variant="displayText3">
            Student to Work Transition
          </Typography>
        </div>
        <div className="row home-resources-sub-heading">
          <Typography variant="displayText5">
            We want to provide you the right resources as your student journey
            ends.
          </Typography>
        </div>
        <div className="row home-resources-text">
          <Typography variant="contentText1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            augue at turpis pellentesque interdum. Suspendisse nec eros
            molestie, elementum tellus quis, finibus magna.
          </Typography>
        </div>
        <div className="row bottom-xs home-resources-button-two">
          <Link
            to="/resources/student-to-work"
            style={{ textDecoration: "none" }}
          >
            <Button appearance="secondary" size="large">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StudentResources
