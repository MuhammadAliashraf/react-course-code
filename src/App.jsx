import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './lecture-14/pages/home'
import About from './lecture-14/pages/about'
import Contact from './lecture-14/pages/contact'
import Layout from './lecture-14/pages/layout'
import Theme from './lecture-15/theme'



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes  >
    <Route  path="/" element={ <Layout/> }  >
        <Route   index element={<Home/>}  /> 
        <Route   path="/about" element={<About/>}  />
        <Route   path="/contact" element={<Contact/>}  />
        <Route   path="/theme" element={<Theme/>}  />

    </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
