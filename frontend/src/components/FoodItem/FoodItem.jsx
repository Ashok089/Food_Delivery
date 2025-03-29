
import { useContext} from 'react'
import { assets } from '../../assets/assets.js'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';

// Here, we have given the props.
// aani jagya aapde " props " lakhi ne pachi " props.image " thi pan access kari sakiye pan aa pan aavadvu joiye aapne.


// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,price,description,image}) => {

    // const [countItem, setItem] = useState(0);
    const { cartItems,addToCart, removeFromCart ,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
        <img className='food-item-image' src={url + "/images/" + image} alt="" />

            {!cartItems[id] ? <img className='add' onClick={() =>addToCart(id) } src={assets.add_icon_white} />
              :<div className='food-item-counter'>
                 <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p> { cartItems[id] } </p>
                 <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
               
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p className='name'> {name} </p>
                <img src={assets.rating_starts} />
            </div>
        <p className='food-item-desc'>  {description} </p>
        <p className='food-item-price'>  ${price} </p>

        </div>
    </div>
  )
}

export default FoodItem