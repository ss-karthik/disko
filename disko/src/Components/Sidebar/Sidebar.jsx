import React from 'react'
import {Link} from 'react-router-dom'
import { Telescope, Disc3, Pickaxe } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-green-900 w-12 h-screen flex flex-col justify-center items-center gap-10'>
        <Link to={"/diskover"}><Telescope color='#ffffff' size={40}/></Link>
        <Link to={"/library"}><Disc3 color='#ffffff' size={40}/></Link>
        <Link to={"/manualadd"}><Pickaxe color='#ffffff' size={40}/></Link>
    </div>
  )
}

export default Sidebar