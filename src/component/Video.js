
import {VideoCard,ChannelCard } from "./";

const Video=({videos}) => {
   
  return (
   
      <div>
        {videos.map((item)=>(
          <div>
            {item.id.videoId && <VideoCard video={item}/>}
             {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </div>
        ))}
      </div>  
   
  );
}

export default Video