import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import '../src/assets/css/style.css'

// import 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js'

const App = () => {
  return (
   <>
   
   
   <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       
      

                        
  

      </Route>
    </Routes>
  </BrowserRouter>
  
   </>
  )
}

export default App