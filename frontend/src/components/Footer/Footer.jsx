
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
            <div className="footer-content-left">
                  <img src={assets.logo} />
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt numquam, laudantium expedita, blanditiis asperiores nulla illum veritatis pariatur minima dignissimos eligendi rem magni quia vitae animi perferendis repudiandae id alias! </p>
                  <div className="social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                  </div>
            </div>
            <div className="footer-content-center">
                <h2> COMPANY  </h2>
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> Delivery </li>
                    <li> Privacy policy </li>
                </ul>
            </div>
            <div className="footer-content-right">
                  <h2> Get in Touch </h2>
                  <ul>
                    <li> +91 999-888-7771 </li>
                    <li> contactTomato@gmail.com </li>
                  </ul>
            </div>     
        </div>  
        <hr />
        <p className="footer-copyright"> Copyright 2024 @ Tomato.com - All Right Reserved. </p>    
    </div>
  )
}

export default Footer