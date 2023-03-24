import { categories} from '../utlis/constant'
function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
    <div className ='grid grid-col-1 px-4'>
        {categories.map((category)=>(
          <button className='rounded-full hover:bg-orange-600 text-white px-4 py-2 my-2'
          onClick={()=>setSelectedCategory(category.name)}
          >
            <span className=''>{category.icon}</span>
             <span>{category.name}</span>
          </button>
        ))}
    </div>
  )
}

export default Sidebar