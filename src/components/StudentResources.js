import React from "react"

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
          <Typography variant="displayText4">Student to Work Transition</Typography>
        </div>
        <div className="row home-resources-sub-heading">
          <Typography variant="displayText6">
            We want to provide you the right resources as your student journey ends.
          </Typography>
        </div>
        <div className="row home-resources-text">
          <Typography variant="contentText1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            augue at turpis pellentesque interdum. Suspendisse nec eros
            molestie, elementum tellus quis, finibus magna.
          </Typography>
        </div>
        <div className="row bottom-xs home-resources-button">
          <Button appearance="secondary" size="large">
            Learn More
          </Button>
        </div>
      </div>
    </>
  )
}

export default StudentResources
