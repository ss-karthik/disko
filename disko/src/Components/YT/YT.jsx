import React, {useState} from 'react'
import MusicPlayer from './MusicPlayer'

import { Search } from 'lucide-react';
const YT = () => {
    
    const url = "https://music.youtube.com/watch?v=WF83_PR2EsA&si=JptFxWihOhqDdOUi";
    const [search, setSearch] = useState("");
    const [results, setResults] = useState();
    const foo =async  ()=>{
        return;
    }
    return (
    <div className='flex flex-col gap-5 justify-center items-center'>
        <div>
        <input className='border border-black p-2 rounded-md max-w-96' onChange={(e)=>{setSearch(e.target.value)}}/>
        <Search onClick={foo}/>
        </div>
        <MusicPlayer earworm={{"title":"test", "artists":"random", "url":url}}/>
    </div>
  )
}

export default YT