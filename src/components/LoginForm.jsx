import React, {useState,useEffect} from 'react';

function LoginForm(){

  const [isMounted , setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[]);
return (
  <div className="split-screen-child login-form-wrapper">
    <form className={`login-form-container ${isMounted ? 'is-visible' : ''}`}>
      <h2>Welcome back!</h2>
      <p className="form-subheading">Please enter your Details</p>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="form-options">
        <div className="checkbox-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember for 30 days</label>
        </div>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
      <button type="submit" className="login-button">Log In</button>
      <div className="form-footer">
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </div>

    </form>
  </div>
);
}
export default LoginForm;
