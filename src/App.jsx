import './App.css'

import Welcome from "./component/welcome"
import ProfileCard from './component/profile-card'
import Box from './component/box'
import Wrapper from './component/wrapper'


function App() {

  

  return (
    <>
      {/* <Welcome  name="React" />
      <Welcome  name="NodeJs" />
      <Welcome  name="HTML" /> */}
      <ProfileCard name="John Doe" position="Software Engineer" />
      <ProfileCard name="Jane Smith" position="Product Manager" />
      <ProfileCard name="Jane Smith" position="Product Manager" />


        <Box>
          <h1>This is Box Childern Component</h1>
          <button>Click Me</button>
          <ProfileCard name="Box Xhildern" position="Inside the Box" />
        </Box>




        <Wrapper title="Html" >
          <p>Html is hyper text markup language</p>
        </Wrapper>
        <Wrapper title="Css" >
          <p>Css is cascading style sheet</p>
        </Wrapper>
        <Wrapper title="Javascript" >
          <p>Javascript is a programming language</p>
        </Wrapper>




    </>
  )
}

export default App
