import yts from 'yt-search'

const searchMusic = async (req)=>{
    let r = await yts(`${req} official audio`);
    r = r.videos.slice(0,5);
    console.log(r);
    return r;
};

export default searchMusic;