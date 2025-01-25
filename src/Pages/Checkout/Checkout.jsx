import { useNavigate } from 'react-router-dom';
import { appContext } from '../../App.jsx'
import "./Checkout.css"
import { useContext } from "react"
import { IoArrowBackSharp } from "react-icons/io5";
const Checkout = () => {
    const {addedBeat} = useContext(appContext)
    const navigate = useNavigate();
  return (
    <div className='checkout-container'>
      <div className="checkout-header">
        <IoArrowBackSharp style={{fontSize: "35px"}} onClick={() => navigate(-1)} className="back-icon"/>
        <h1>Checkout</h1>
      </div>
        <div className="checkout-all">
          <div className="checkout-info">
            <h2>Address Information</h2>
            <div className="names">
              <div className="name">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
              </div>
              <div className="name">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"/>
              </div>
            </div>
            <div className="street">
              <div className="street-1">
                <label htmlFor="street">Street Address</label>
                <input type="text" id="street"/> 
              </div> 
              <div className="street-1">
                <label htmlFor="city">City</label>
                <input type="text" id="City"/>    
              </div>
            </div>
            <div className="street">
              <div className="street-1">
                <label htmlFor="country">Country</label>
                <input type="text" id="Country"/>    
              </div> 
              <div className="street-1">
                <label htmlFor="country">Phone Number</label>
                <input type="text" id="Phone"/>    
              </div>
            </div>
          </div>
            <div className="checkout-text">
              {addedBeat.length <= 1 ? <h2>Your Selected Beat:</h2> :<h2>Your Selected Beats:</h2>}
              <div className="title-2">
              <h4>Product</h4>
              <h4>Title</h4> 
              <h4>Price</h4>
            </div>

              {
                addedBeat.map(beat => (
                  <div className='checkout-final' key={beat.id}>
                    <img src={beat.image} alt={beat.name} />
                      <h3>{beat.name}</h3>
                      <p>${beat.price}</p>
                  </div>
                ))
              }
              <div className="total-2">
                <h3>Total: ${addedBeat.reduce((acc, item) => acc + Number(item.price), 0)}</h3>
                <button className="Checkout-btn">Submit Payment</button>
              </div>
            </div>
  
      </div>  
  
    </div>
  )
}

export default Checkout