import React from "react";
import "../style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Login</button>
        </form>

        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Login;
