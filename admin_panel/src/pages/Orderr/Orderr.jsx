import './Orderr.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orderr = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      setOrders(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error retrieving orders");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusHandler = async (event,orderId) => {
     const response = await axios.post(url+"/api/order/status" , {
       orderId,
       status:event.target.value
     })
     if(response.data.success) {
        await fetchAllOrders();
     }
  }

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
        deserunt ipsa sit blanditiis provident dolorum dicta ab nobis veritatis
        aliquam alias aliquid sunt sapiente quis ipsam laudantium id quae aperiam.
      </p>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index < order.items.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <p className='order-item-name'> {order.address.firstName + " " +order.address.lastName} </p>
                <div className='order-item-address'> 
                  <p> { order.address.street + ","} </p>
                  <p> { order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode} </p>
                </div>
                <p className='order-item-phone'> {order.address.phone}   </p>
              </div>
              <p> Items : {order.items.length} </p>
              <p> ${order.amount} </p>
              <select onChange={(event) => statusHandler(event,order._id)} value={order.status} >
                 <option value="Food Processing">  Food Processing </option>
                 <option value="Out for delivery"> Out for delivery </option>
                 <option value="Delivered"> Delivered </option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orderr;