import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
const Layout = ({ cartItems }) => {
  let total = 0;
  cartItems.forEach(element => { total += element.price; });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
