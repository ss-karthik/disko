import ytdl from "@distube/ytdl-core"

const downloadMusic = async (url)=>{
    try{
        const vidInfo = await ytdl.getInfo(url);
        const formats = ytdl.filterFormats(vidInfo.formats, "audioonly");
        const res = formats.map((item)=>{
            return item.url;
        });
        return res;
    } catch(e){
        console.log(e);
    }
}

export default downloadMusic;