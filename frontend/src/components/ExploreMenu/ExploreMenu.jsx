
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category, setCategory}) => {
  return (

    <div className='exploreMenu' id="exploreMenu" >
        <h1> Explore our menu  </h1>
        <p className='text'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta non, impedit quas maxime nemo, quae consectetur maiores sequi nesciunt quia amet alias eligendi accusantium vitae perspiciatis! Fuga, illum odit! Vel. </p>
        <div className='menu-list'>
         {menu_list.map((product, index) => (
                
           <div onClick={() => setCategory(prev=>prev === product.menu_name?"All":product.menu_name)} key={index} className='menu-list-item'>
             <img className={category===product.menu_name?"active":""} src={product.menu_image}  />
             <p> {product.menu_name} </p>
           </div>
           
         ))}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu