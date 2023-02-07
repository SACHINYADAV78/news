import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {
    const parameters = useParams()

  return (
    <div>
         <h1>profile: {`${parameters.userID} ${parameters.project}`}</h1>

    </div>
  )
}

export default Project