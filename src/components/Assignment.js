import React from "react"

import {
  FormControl,
  Input,
  Button,
  Typography,
} from "@atlas-design-system/react"

const Assignment = ({
  id,
  title,
  description,
  information,
  dueDate,
  published_at,
}) => {
  return (
    <div>
      <Typography variant="displayText4">{title}</Typography>
      {description.map(description => {
        return <p key={description.id}>{description.text}</p>
      })}
    </div>
  )
}

export default Assignment
