import React, {useEffect, useState} from 'react'
import MusicPlayer from '../YT/MusicPlayer';

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
    <div className='lg:ml-14 ml-18 pr-2'>
        {url && 
            <MusicPlayer earworm={{"title":title, "artists":author, "url":url}}/>
        }
        {data &&
        <div>
            {data.map((v)=>{
                return(
                    <div className='flex justify-between'>
                    <div className='cursor-pointer max-w-96 border border-black p-2 rounded-md' 
                    key={v.url} onClick={(e)=>{
                        setUrl(v.url);
                        setTitle(v.title);
                        setAuthor(v.artists);
                    }}>
                        {v.title} -- {v.artists}
                    </div>
                    <button className='border border-black p-2' onClick={()=>{
                        handleDislike(v);
                    }}>Delete</button>
                    </div>
                )
            })}
        </div>
        }
    </div>
  )
}

export default Library