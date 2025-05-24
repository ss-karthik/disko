import React, {useEffect, useState} from 'react'
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import { Trash2 } from 'lucide-react';

const Library = () => {
    const [data, setData] = useState([]);

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    useEffect(()=>{
        try{
            const storedData = localStorage.getItem("disko");
            if(storedData)
                setData(JSON.parse(storedData));
        } catch(e) {
            console.log(e);
        }
    }, [])

    const handleDislike = (v)=>{
        const modified = data.filter(vid=>vid.url!=v.url);
        setData(modified);
        try{
            localStorage.setItem("disko", JSON.stringify(modified));
        } catch(e){
            console.log(e);
        }
    }
  
    return (
    <div>
        {url && 
            <MusicPlayer earworm={{"title":title, "artists":author, "url":url}}/>
        }
        {data &&
        <div className='flex flex-col gap-5 justify-center md:items-center items-end p-2'>
            <h1 className='text-5xl py-5'>Library</h1>
            {data.map((v)=>{
                const str = v.title + " -- " + v.artists;
                const displayTitle = str.length >40 ? str.substring(0,40) +"..." : str;
                return(
                    <div className='cursor-pointer border border-black p-2 rounded-md flex gap-2 md:w-96 w-72 items-center justify-between'>
                        <div
                        key={v.url} onClick={(e)=>{
                            setUrl(v.url);
                            setTitle(v.title);
                            setAuthor(v.artists);
                        }}
                        title={str}
                        >
                            {displayTitle}
                        </div>
                        <Trash2  className='cursor-pointer' onClick={()=>{
                            handleDislike(v);
                        }}/>
                    </div>
                )
            })}
        </div>
        }
    </div>
  )
}

export default Library