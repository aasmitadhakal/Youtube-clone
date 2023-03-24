import {BrowserRouter,Routes,Route}from 'react-router-dom';
import { Navbar,ChannelDetail,VideoDetail,SearchFeed,Feed } from './component';
function App() {
  return (
    <BrowserRouter>
   < Navbar />
    {/* routes for routing */}
    <div>
    <Routes>
       <Route path ='/' exact element={< Feed/>}></Route>
      <Route path ='/video'element={<VideoDetail />}></Route>
      <Route path ='/chanel'element={<ChannelDetail />}></Route>
       <Route path ='/search'element={< SearchFeed/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
