import React from 'react'
import Home from './Components/Home/Home.jsx'
import YT from './Components/YT/YT.jsx'
import Library from './Components/Library/Library.jsx'
import ManualAdd from './Components/ManualAdd/ManualAdd.jsx'
import {Routes, Route} from 'react-router-dom'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='diskover' element={<YT/>}/>
            <Route path='/manualadd' element={<ManualAdd/>}/>
        </Routes>
    </>
  )
}

export default Routing