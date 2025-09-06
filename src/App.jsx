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
import Movies from './lecture-7/movies'
import { useEffect } from 'react'
import Logger from './lecture-10-11-12/logger'
import ApiFetching from './lecture-10-11-12/api-fetching'


function App() {

  // const [login, setLogin] = useState(false)

  // const handleLogin = () => {
  //   setLogin(true)
  // }

//   const movies = [
//   {
//     name: "Inception",
//     releaseDate: "2010-07-16",
//     category: "Sci-Fi"
//   },
//   {
//     name: "The Dark Knight",
//     releaseDate: "2008-07-18",
//     category: "Action"
//   },
//   {
//     name: "Interstellar",
//     releaseDate: "2014-11-07",
//     category: "Sci-Fi"
//   },
//   {
//     name: "The Matrix",
//     releaseDate: "1999-03-31",
//     category: "Sci-Fi"
//   },
//   {
//     name: "Gladiator",
//     releaseDate: "2000-05-05",
//     category: "Historical Drama"
//   },
//   {
//     name: "Titanic",
//     releaseDate: "1997-12-19",
//     category: "Romance"
//   },
//   {
//     name: "Avengers: Endgame",
//     releaseDate: "2019-04-26",
//     category: "Superhero"
//   },
//   {
//     name: "Joker",
//     releaseDate: "2019-10-04",
//     category: "Drama"
//   },
//   {
//     name: "The Lion King",
//     releaseDate: "1994-06-24",
//     category: "Animation"
//   },
//   {
//     name: "Forrest Gump",
//     releaseDate: "1994-07-06",
//     category: "Drama"
//   }
// ];

//   const [data, setData] = useState([])
//   const [isloading, setIsloading] = useState(false)

//   useEffect(()=>{
//     setIsloading(true)
//     setTimeout(() => {
//       setData(movies)
//       setIsloading(false)
//     }, 2000);
//   },[])



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
        {/* <Greeting isLoggedIn={login}/>

        {
          !login && 
        <button onClick={handleLogin}>Login</button>
        }

        {
          login &&
        <button onClick={() => setLogin(false)}>Logout</button>
        }

          {/* Example :2  Render User list */}
          {/* <UserList/>
          <TodoList/> */}

            {/* // Lecture 7: render list and ux  */}

            {/* <h1>Render list Item In React with all the possible solutions</h1> */}
            {/* <Movies movies={data} loading={isloading}   /> */}


      <Logger/>   
      <ApiFetching/>




    </>
  )
}

export default App


// 1- data display ✅
// 2 - loading   ✅ 
// 3- error handling ✅ 