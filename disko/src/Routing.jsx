import React from 'react'
import Home from './Components/Home/Home.jsx'
import YT from './Components/YT/YT.jsx'
import {Routes, Route} from 'react-router-dom'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='diskover' element={<YT/>}/>
        </Routes>
    </>
  )
}

export default Routing