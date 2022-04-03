import React from "react"
import { Link } from "gatsby"
import axios from "axios"

//Atlas Components
import {
  Typography,
  ButtonGroup,
  Button,
  toast,
  HeartIcon,
  CloseIcon,
} from "@atlas-design-system/react"

const AddToFeatured = ({ journal }) => {
  const isFeatured = journal.featured

  const addFeaturedForm = () => {
    const form = {
      featured: true,
    }
    toast.promise(
      axios
        .put(
          `https://internport-api.herokuapp.com/journals/${journal.strapiId}`,
          form
        )
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        }),
      {
        loading: "Adding to featured...",
        success: "Journal added to featured!",
        error: "Failed to add journal to featured.",
      }
    )
  }

  const removeFeaturedForm = () => {
    const form = {
      featured: false,
    }
    toast.promise(
      axios
        .put(
          `https://internport-api.herokuapp.com/journals/${journal.strapiId}`,
          form
        )
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        }),
      {
        loading: "Removing from featured...",
        success: "Journal removed from featured!",
        error: "Failed to remove journal to featured.",
      }
    )
  }

  return (
    <Link style={{ textDecoration: "none" }}>
      {isFeatured ? (
        <Button
          appearance="secondary"
          icon={<CloseIcon />}
          onClick={removeFeaturedForm}
        >
          Remove from featured
        </Button>
      ) : (
        <Button
          appearance="secondary"
          icon={<HeartIcon />}
          onClick={addFeaturedForm}
        >
          Add to featured
        </Button>
      )}
    </Link>
  )
}

export default AddToFeatured
