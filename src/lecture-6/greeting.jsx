import React from 'react'

const Greeting = ({isLoggedIn}) => {
  return (
    <>
    {
        isLoggedIn ? <h1>welcome back user</h1> : <h1>please login</h1>
    }
    </>
  )
}

export default Greeting