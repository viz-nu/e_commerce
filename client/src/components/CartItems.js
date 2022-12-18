import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from "./../store/cart-slice";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  const dispatch=useDispatch()
  const clearCart=()=>{
    dispatch(dispatch(cartActions.clearCart()))
  }
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li >
            <CartItem id={item.id} price={item.price} name={item.name} quantity={item.quantity}/>
          </li>
        ))}

      </ul>
      <h3 className="cartIcon" onClick={clearCart}>clear cart</h3>
    </div>
  );
};

export default CartItems;
