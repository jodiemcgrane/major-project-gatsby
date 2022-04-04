import React from "react"
import { Link } from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Atlas Components
import { Typography, Button } from "@atlas-design-system/react"

const InternshipResource = () => {
  return (
    <>
      <div className="col-md-7">
        <div className="row home-resources-heading">
          <Typography variant="displayText3">Internship Experience</Typography>
        </div>
        <div className="row home-resources-sub-heading">
          <Typography variant="displayText5">
            Want to make the most out of your internship?
          </Typography>
        </div>
        <div className="row home-resources-text">
          <Typography variant="contentText1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            augue at turpis pellentesque interdum. Suspendisse nec eros
            molestie, elementum tellus quis, finibus magna.
          </Typography>
        </div>
        <div className="row bottom-xs home-resources-button-one">
          <Link
            to="/resources/internship-experience"
            style={{ textDecoration: "none" }}
          >
            <Button appearance="secondary" size="large">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-md-4">
        <StaticImage
          src="../assets/images/home-resources-1.jpeg"
          alt="Home Resources"
          as="section"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </>
  )
}

export default InternshipResource
