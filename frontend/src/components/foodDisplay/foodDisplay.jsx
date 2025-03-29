
import { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

//  ave aa foodDisplay can use data of food_list because aapde enu useContext aapi didhu che.

const foodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);


  return (
    <div className='food-display' >
      <h2> Top dishes near you </h2>
      <div className='food-display-list'>
          {food_list.map((item,index) => {

              if(category === "All" || category === item.category) {

               return <FoodItem key={index} name={item.name} id={item._id} description={item.description} price={item.price} image={item.image} /> 
              }
          })}
      </div>
    </div>
  )
}

export default foodDisplay

/*

Controlled props are a pattern in React where the parent component manages 
the state of a child component's props. In this case, the foodDisplay component
is passing the id, description, price, and image props to the FoodItem component.
These props are controlled by the foodDisplay component, which receives the data
from the context and determines the values of these props for each food item.

we can check our file in redux in all language folder.

*/