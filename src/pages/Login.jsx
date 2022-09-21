import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import "../style.scss";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Login</button>
          {err && <span>there is an error</span>}
        </form>

        <p>
          You don't have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
