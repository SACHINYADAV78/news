import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
   const parameters = useParams()

  return (
    <div>
         <h1>profile: {parameters.userID}</h1>
         
    </div>
  )
}

export default User