import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {

    dispatch(cartActions.removefromcart({
      name,
      id,
      price,
      quantity
    }));
  }
  const addToCart = () => {

    dispatch(cartActions.addtocart({
      name,
      id,
      price,
      quantity
    }));
  }

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>x{quantity}</p>
      <article>price ${price} /-</article>
      
      <button className="cart-actions" onClick={removeFromCart}>
        -
      </button>
      <p>{quantity}</p>
      <button className="cart-actions" onClick={addToCart}>
        +
      </button>
    </div>
  );
};

export default CartItem;
