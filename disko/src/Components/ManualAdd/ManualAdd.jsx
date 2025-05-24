import React, {useState} from 'react'

const ManualAdd = () => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [artists, setArtists] = useState("");

    const handleSongAddition = ()=>{
        const earworm = {"title": title, "artists": artists, "url": url}
        let arr = [];
        try{
            const storedData = localStorage.getItem("disko");
            if(storedData){
                arr = JSON.parse(storedData);
            }
        } catch (e){
            console.log(e);
            arr = []
        }
        const isDuplicate = arr.some(item => item.url === url);
        if(!isDuplicate)
            arr.push(earworm);
        
        try{
            localStorage.setItem("disko", JSON.stringify(arr));
            alert("success");
        } catch(e){
            console.log(e);
        }
        
    }
  
    return (
    <div className='lg:ml-14 ml-18 pr-2 flex flex-col gap-5 justify-center md:items-center items-end'>
        <h1 className='text-4xl py-5'>Manual Song Addition</h1>
        <div>
            <p>Title:</p>
            <input className='border border-black' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div>
            <p>Artists:</p>
            <input className='border border-black' value={artists} onChange={e=>setArtists(e.target.value)}/>
        </div>
        <div>
            <p>URL:</p>
            <input className='border border-black' value={url} onChange={e=>setUrl(e.target.value)}/>
        </div>
        <button className='cursor-pointer border border-black p-2' onClick={handleSongAddition}>Add song</button>
    </div>
  )
}

export default ManualAdd