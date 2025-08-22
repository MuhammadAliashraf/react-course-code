import React from 'react'

const ProfileCard = (props) => {
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <p>Position:{props.position}</p>
    </div>
  )
}

export default ProfileCard