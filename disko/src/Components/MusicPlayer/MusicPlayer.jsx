import { Play, VolumeX, Pause, Volume2, ThumbsUp, Download } from 'lucide-react';
import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player/youtube'

const MusicPlayer = ({earworm}) => {
    const backendURL = "http://localhost:3000"

    const [playstate, setPlaystate] = useState(true);
    const [mute, setMute] = useState(false);
    const [progress, setProgress] = useState(0);
    const [likecol, setLikecol] = useState("#ffffff");
    const [shortTitle, setShortTitle] = useState("");
    useEffect(()=>{
        setPlaystate(true);
        setLikecol("#ffffff");
        const str = earworm.title+"--"+earworm.artists;
        const displayTitle = str.length >40 ? str.substring(0,40) +"..." : str;
        setShortTitle(displayTitle);
    }, [earworm])

    const handlePlayPause = () => {
        setPlaystate(!playstate);
    };

    const handleMuting = () => {
        setMute(!mute);
    };

    const handleProgress = (state) => {
        const { played } = state;
            setProgress(played);
    };

    const handleLiking = ()=>{
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
        const isDuplicate = arr.some(item => item.url === earworm.url);
        if(!isDuplicate)
            arr.push(earworm);
        
        try{
            localStorage.setItem("disko", JSON.stringify(arr));
            setLikecol("#0f0");
        } catch(e){
            console.log(e);
        }
    }

    const handleDownload = async ()=>{
        try{
            const response = await fetch(`${backendURL}/download`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"url" : earworm.url}),
            })

            const link = await response.json();
            window.open(link, "_blank");
        } catch (e){
            console.log(e);
        }
    }

  return (
    <div className='fixed bottom-0 w-full bg-amber-900 shadow-lg'>
    <div className='w-full flex justify-between items-center gap-4 px-4 py-3'>   
        <div className='flex items-center gap-3 flex-1 min-w-0'>
            <ReactPlayer url={earworm.url} width={70} height={70} playing={playstate} muted={mute} 
                onProgress={handleProgress}
            />
            <div className='text-md text-white' title={earworm.title+"--"+earworm.artists}>{shortTitle}</div>
        </div>
        
         
        <div className='flex justify-center gap-4'>
            <button onClick={handlePlayPause}>
                {playstate ? (<Pause className='cursor-pointer' color='#ffffff' />) : (<Play className='cursor-pointer' color='#ffffff'/>) }
            </button>
            <button onClick={handleMuting}>
                {mute ? (<VolumeX className='cursor-pointer' color='#ffffff' />) : (<Volume2 className='cursor-pointer' color='#ffffff'/>) }
            </button>
            <button onClick={handleLiking}>
                <ThumbsUp className='cursor-pointer' color={likecol}/>
            </button>
            <button onClick={handleDownload}>
                <Download className='cursor-pointer' color="#ffffff"/>
            </button>
        </div>
        <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.01} 
                className='w-32 flex-shrink-0'
                value={progress}
            />
        
    </div>
    </div>
  )
}

export default MusicPlayer