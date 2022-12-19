import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useEffect } from "react";
import "./Layout.css";
import { useSelector,useDispatch } from 'react-redux';
import Notification from "./Notification";
import { uiActions } from "../store/ui-slice";
const Layout = ({ cartItems }) => {
  let total = 0;
  cartItems.forEach(element => { total += element.price; });
  const showCart = useSelector(state => state.cart.showCart);
  const cart = useSelector((state) => state.cart)
  const dispatch =useDispatch()
  const notification=useSelector(state=>state.ui.notification)
  useEffect(() => {
    const sendRequest = async () => {
      try {
        dispatch(uiActions.showNotification({
          open:true,
          message:"sending request",
          type:'warning'
        }))
        const res = await fetch("https://e-commerce-redux-e7208-default-rtdb.firebaseio.com/cartItems.json", {
          method: "PUT",
          body: JSON.stringify(cart)
        })
        const data = await res.json();
        dispatch(uiActions.showNotification({
          open:true,
          message:"cart updated successfully",
          type:'success'
        }))
      } catch (error) {
        dispatch(uiActions.showNotification({
          open:true,
          message:"error during cart updation",
          type:'error'
        }))
      }
    }
    sendRequest()

  }, [cart])
  return (
    <React.Fragment>
      <div className="layout">
      {notification && <Notification type={notification.type} message={notification.message} />}
        <Header />
        <Products />
         {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
