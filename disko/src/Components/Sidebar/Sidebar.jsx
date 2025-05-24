import React from 'react'
import {Link} from 'react-router-dom'
import { Telescope, Disc3, Pickaxe } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-sky-300 w-12 h-screen flex flex-col justify-center items-center gap-10'>
        <Link to={"/"}><Disc3 size={40}/></Link>
        <Link to={"/diskover"}><Telescope size={40}/></Link>
        <Link to={"/manualadd"}><Pickaxe size={40}/></Link>
    </div>
  )
}

export default Sidebar