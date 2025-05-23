import { Play, VolumeX, Pause, Volume2, ThumbsUp } from 'lucide-react';
import React, {useState} from 'react'
import ReactPlayer from 'react-player/youtube'


const MusicPlayer = ({earworm}) => {
    const [playstate, setPlaystate] = useState(true);
    const [mute, setMute] = useState(false);
    const [progress, setProgress] = useState(0);

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
        } catch(e){
            console.log(e);
        }
    }

  return (
    <div className='flex flex-col justify-center items-center gap-3 py-5'>
        
        <ReactPlayer url={earworm.url} width={300} height={300} playing={playstate} muted={mute} 
            onProgress={handleProgress}
        />
        <div className='text-md'>{earworm.title} -- {earworm.artists}</div>
         <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.01} 
                className='w-64'
                value={progress}
                
            />
        <div className='flex justify-center gap-5'>
            <button onClick={handlePlayPause}>
                {playstate ? (<Pause />) : (<Play/>) }
            </button>
            <button onClick={handleMuting}>
                {mute ? (<VolumeX />) : (<Volume2/>) }
            </button>
            <button onClick={handleLiking}>
                <ThumbsUp/>
            </button>
        </div>
    </div>
  )
}

export default MusicPlayer