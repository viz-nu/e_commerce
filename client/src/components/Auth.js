import React from "react";
import "./Auth.css";
import {useDispatch } from "react-redux";
import {authActions} from "../store/auth-slice"
const Auth = () => {
const dispatch =useDispatch();
const  onSubmitHandler=(e)=>{
  e.preventDefault();
  dispatch(authActions.login());

}
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form  onSubmit={onSubmitHandler}>
        <label htmlFor="id">Id</label>
        <input type="email" name="email" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Auth;
