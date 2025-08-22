import { useState } from 'react'
import './App.css'

import Welcome from "./component/welcome"
import ProfileCard from './component/profile-card'


function App() {

  

  return (
    <>
      {/* <Welcome  name="React" />
      <Welcome  name="NodeJs" />
      <Welcome  name="HTML" /> */}
      <ProfileCard name="John Doe" position="Software Engineer" />
      <ProfileCard name="Jane Smith" position="Product Manager" />
    </>
  )
}

export default App
