import { useContext  } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../../App.jsx'
import './Cart.css'

const Cart = () => {
  const {addedBeat,removedBeat , clearCart} = useContext(appContext)
  const total = addedBeat.reduce((acc, item) => acc + Number(item.price), 0)
  const navigate = useNavigate()
  return (
    <div className='cart-container'>
      <div className="top">
        <h1>Your Cart</h1>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className='clear-cart' onClick={() => clearCart()}>Clear Cart</button>
      </div>
      {
        addedBeat.length === 0 ? <h2 className='empty'>Your cart is empty</h2> :
        <div className='cart'>
            <div className="title">
              <h4>Product</h4>
              <h4>Title</h4> 
              <h4>Price</h4>
              <h4>Remove</h4>
            </div>
          {
            addedBeat && addedBeat.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <button className="remove" onClick={() => removedBeat(item.id)}>Remove</button>
              </div>
            ))
          }
          <div className="bottom">
            <button className='checkout' onClick={() => navigate('/checkout')}>Checkout</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart