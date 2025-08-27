import './App.css'

import Welcome from "./component/welcome"
import ProfileCard from './component/profile-card'
import Box from './component/box'
import Wrapper from './component/wrapper'
import Count from './Lecture-4/count'
import NameInput from './Lecture-4/name-input'
import Like from './Lecture-4/like'
import FeedbackForm from './Lecture-5/feedback-form'
import Greeting from './lecture-6/greeting'
import { useState } from 'react'
import UserList from './lecture-6/user-list'
import TodoList from './lecture-6/todo'


function App() {

  const [login, setLogin] = useState(false)

  const handleLogin = () => {
    setLogin(true)
  }

  

  return (
    <>
      {/* <Welcome  name="React" />
      <Welcome  name="NodeJs" />
      <Welcome  name="HTML" /> */}
      {/* <ProfileCard name="John Doe" position="Software Engineer" />
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
        </Wrapper> */}

        {/* lecture 4 start 

        <Count/>
        <NameInput/>
        <Like/>

        lecture 4 end */}

      {/* <h1>Welcome to React Lecture 5</h1>
      <p>Lecture 5: Input Fields & Forms in React (Basics)</p> */}
      {/* <FeedbackForm/> */}
      
      {/* <h1>Welcome to React Lecture 6</h1>
      <p>Lecture 6: Conditional Rendering & Lists in React</p> */}

          {/* Example :1  COnditional Rendering */}
        <Greeting isLoggedIn={login}/>

        {
          !login && 
        <button onClick={handleLogin}>Login</button>
        }

        {
          login &&
        <button onClick={() => setLogin(false)}>Logout</button>
        }

          {/* Example :2  Render User list */}
          <UserList/>
          <TodoList/>

    </>
  )
}

export default App
