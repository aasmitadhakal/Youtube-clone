import {Link} from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utlis/constant"
const VideoCard=({video:{id:{videoId},snippet}})=> {
  console.log(videoId,snippet);
  return (
    <div className=''>
     <div className='bg-gray-100 z-20 grid grid-cols-4 '>
      <div className='bg-white drop-shadow-2xl mx-4 my-2 p-4  rounded'>
       <div> <img className='h-52 w-64' src={snippet?.thumbnails?.high?.url} alt =''/></div>
      <div className='font-bold text-gray-800 my-2 '>
        {snippet?.title ||demoVideoTitle}
      </div>
      </div>
      </div>
    </div>
  )
}

export default VideoCard