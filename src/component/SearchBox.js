import SearchIcon from '@mui/icons-material/Search';
import {Paper,IconButton} from '@mui/material'
function SearchBox() {
  return (
    <Paper
    component ='form'
    onSubmit ={()=>{}}
    sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr:{sm:5},

    }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton> 
    </Paper>
  )
}

export default SearchBox