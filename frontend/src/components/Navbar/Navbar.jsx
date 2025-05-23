
import {useContext, useState} from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate} from "react-router-dom"

// convert " li " tag to " Link " tag now.

const Navbar = ({ setShowLogin }) => {
 
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount , token , setToken} = useContext(StoreContext);

    const navigate = useNavigate();
    const logout = () => {
          localStorage.removeItem("token");
          setToken("");
          navigate("/");
    }

  return (

    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className='logo' /> </Link>

        <ul className='navbar-list'>
             <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""} > Home </Link>
             <a href="#exploreMenu"  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} > menu </a>
             <a href="#appDownload" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} > mobile-app </a>
             <a href="#footer" onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""} > contact us </a>
        </ul>

        <div className='navbar-right'>
            <img src={assets.search_icon}   alt=""  />
            <div className='navbar-search-icon'> 

            <Link to='/cart'> <img src={assets.basket_icon}  /> </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>  </div>

        </div>

        {!token?<button onClick={() => setShowLogin(true)}> sign in </button>
        :<div className='navbar-profile'>
              <img src={assets.profile_icon}  />  
              <ul className="nav-profile-dropdown">
                   <li onClick={() => navigate('/myorders')} > <img src={assets.bag_icon} /> <p> Orders </p> </li>
                   <hr />
                   <li onClick={logout} > <img src={assets.logout_icon} /> <p> Logout </p>  </li>  
              </ul> 
        </div>}

        

        </div>
    </div>

  )
}

export default Navbar