import React, {useState} from 'react'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import { backendURL } from '../../Constants';

import { Search } from 'lucide-react';
const YT = () => {
     const [search, setSearch] = useState("");
    const [results, setResults] = useState();

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSearch = async  ()=>{
        try{
            const response = await fetch(`${backendURL}/search`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({searchText : search}),
            })

            const data = await response.json();
            setResults(data);

        } catch (e){
            console.log(e);
        }
    }
    return (
    <div className='bg-lime-200 min-h-screen pb-40 flex flex-col gap-5 justify-center md:items-center items-end py-2 px-2'>
        <h1 className='text-5xl py-5'>Diskover</h1>
        <div className='flex gap-5 items-center justify center'>
            <input className='border border-black p-2 rounded-md max-w-96 placeholder:text-slate-600' placeholder='look up a song' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <Search className='cursor-pointer' onClick={handleSearch}/>
        </div>
        {results && (
            <div className='flex flex-col flex-wrap gap-3 '>
                {results.map((v)=>{
                    return(
                        <div className='cursor-pointer md:max-w-96 max-w-72 border border-black p-2 rounded-md' 
                        key={v.url} onClick={(e)=>{
                            setUrl(v.url);
                            setTitle(v.title);
                            setAuthor(v.author.name);
                        }}>
                            {v.title} -- {v.author.name}
                        </div>
                    )
                })}
            </div>  
        )}
        {url && 
            <MusicPlayer earworm={{"title":title, "artists":author, "url":url}}/>
        }
    </div>
  )
}

export default YT