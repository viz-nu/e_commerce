import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice"
const Product = ({ name, id, imgURL, price, quantity }) => {
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
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <h3>$ {price}</h3>
        <button className="addToCart" onClick={addToCart}>Add to cart</button>
        <button className="addToCart" onClick={removeFromCart}>remove from cart</button>
    </div>
  );
};
export default Product;