import React from "react";
import "./Cart.css";
import {useSelector} from "react-redux"
const Cart = () => {
  const cartItems=useSelector((state)=>(state.cart.itemsList));
  const quantity=cartItems.length ;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
      
    </div>
  );
};

export default Cart;
