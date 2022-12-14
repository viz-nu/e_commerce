import React from "react";
import "./App.css";

import Auth from "./components/Auth";
import { useSelector } from "react-redux"
import Layout from "./components/Layout";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart)
  const cartItems = cart.itemsList;
 
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout cartItems={cartItems} />}

    </div>
  );
}

export default App;
