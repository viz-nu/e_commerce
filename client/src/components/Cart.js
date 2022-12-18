import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux"
import { cartActions } from "./../store/cart-slice";
const Cart = () => {
  const cartItems = useSelector((state) => (state.cart.itemsList));
  const quantity = cartItems.length;
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
