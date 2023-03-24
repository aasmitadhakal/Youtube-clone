import {FetchFromApi} from '../utlis/FetchFromApi';
import {useState,useEffect} from 'react';
import {Sidebar,Video } from './'
function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos]=useState(null)
  
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory]);
  return (
   
    <div className ='flex bg-black text-white'>
      <div className='h-screen flex-col border-r-2 border-slate-700 px-4 ' >
      <Sidebar
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
      />
      </div>
      {/* Video Part */}
      <div>
      <div className='font-bold text-4xl mt-2 pl-4 '>{selectedCategory}<span className='text-orange-600'>Video</span></div>
      <Video videos={videos} />
      </div>
    </div>

  )
}

export default Feed