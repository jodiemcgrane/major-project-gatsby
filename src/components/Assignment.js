import React from 'react'

const Assignment = ({
    title,
    description,
    information,
    dueDate,
    published_at,
}) => {
  return (
    <div>
        <h3>{title}</h3>
        {description.map((description) => {
            return (
                <p key={description.id}>{description.text}</p>
            )
        })}
    </div>
  )
}

export default Assignment