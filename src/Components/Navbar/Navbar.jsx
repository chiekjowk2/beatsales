import "./Navbar.css"
import { BsCart2 } from "react-icons/bs";
import { appContext} from "../../App.jsx"
import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const {handleHide , hide, addedBeat} = useContext(appContext)
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className='navbar-container'>
        <div className="logo">
          <img src="/assets/IK MILES BEATS.png" alt="" />
        </div>
        <div className="left">
          <div className="link">
              <Link to="/home">Home</Link>
              <Link to="/beats">Beats</Link>
              <Link to="/Uploads">Uploads</Link>
          </div>
          <div className="cart" onClick={() => navigate('/cart')}>
            <div className="count">
              <span>{addedBeat ? addedBeat.length : 0}</span>
            </div>
            <BsCart2 className="cart-icon" />
          </div>
          <div className="menu">
            <RiMenu3Fill className="menu-icon" onClick={handleHide}/>
            {
              hide && <div className="menu-items">
                <>
                <IoCloseOutline onClick={handleHide} className="close-icon"/>
                <div className="link-1">
                  <Link to="/home">Home</Link>
                  <Link to="/beats">Beats</Link>
                  <Link to="/Uploads">Upload</Link>
                </div>
                </>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar