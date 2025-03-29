
import { createContext, useState, useEffect } from "react";
// import { food_list } from "../assets/assets.js";
import axios from "axios"

// ahiya Context create kari lidhu.
export const StoreContext = createContext(null) 

// here, we create Provider Component , which will have the data, which is accessible by child components.
// Provider ma value " return " thai, remember that.
// Then, aapde App component je App.jsx hoi, ene aa " PROVIDER " thi wrap kari levanu.
// " children " lakhva thi, amna je pan StoreContextProvider aana andar che COMPONENT , je aa DATA ne access kari sake.
// "If" statement will add to cart for first time and if it is add already, "else" will be called.


const StoreContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({});
    const url = "https://localhost:4000";
    const [token,setToken] = useState("");
    const [food_list, setFoodList] = useState([]);


    const addToCart = async (itemId) => {

        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))   
        }
        else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
        
        if(token) {
            await axios.post(url + "/api/cart/add" , {itemId} , {headers:{token}} )
        }
    }

    const removeFromCart =  async (itemId) => {

            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            
            if(token) {
                await axios.post(url + "/api/cart/remove" ,{itemId} , {headers:{token}})
            }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0 ) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    } 

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }


    //  jyare aapde refresh kariye page ne toh e addlist or removelist na number decrease thai jai, te na thai enu logic.

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get" , {} , {headers:{token}}) 
        setCartItems(response.data.cartData);
    }


    // aa aapde refresh kariye ne page toh user logout thai jai automatic e na thai ena mate nu logic.

    useEffect(() => {
       
        async function loadData() {
            await fetchFoodList();
        
        if(localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
           }
       }    
       loadData();
    },[])


    
    // This is our " DATA " containing all food list ( which os object here ).
    const contextValue = {
        food_list, // Now using updated food_list
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };
    
    
    return (
        <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider