import React from 'react'
import Home from './Components/Home/Home.jsx'
import {Routes, Route} from 'react-router-dom'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default Routing