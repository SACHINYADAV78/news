import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/Slices/CartSlice'
import './singleProduct.css'

function SingleProduct({product}) {
    const dispatch = useDispatch()
    const cart = useSelector(state=> state.cartReducer.cart)
    const cartItem = cart.find(item=>item.id === product.id)
      const curQuantity = cartItem ? cartItem.quantity : 0 
  return (
    <div className='singleProduct'>
        <img className='product-image' src={product.images[0]} alt={product.title} />
        <div className="single">
        <h2 className='product-title'>{product.title}</h2>
        <p className='product-name'>${product.price}</p>
        </div>
        <div className="cart-info">
            <button className='botton' onClick={()=>dispatch(removeFromCart(product.id))}>-</button>
            <p>{curQuantity }</p>
            <button className='botton' onClick={()=>dispatch(addToCart(product.id))}>+</button>
        </div>
    </div>

  )
}

export default SingleProduct