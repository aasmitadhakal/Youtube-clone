import {Link} from 'react-router-dom';
import {logo} from '../utlis/constant';
import SearchBox from './SearchBox';
import { Stack } from "@mui/material";

function Navbar() {
  return (
   
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo"  className='h-14' />
    </Link>
    <SearchBox />
  </Stack>
  
  )
}

export default Navbar