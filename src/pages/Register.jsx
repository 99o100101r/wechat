import React from "react";
import one from "../images/one.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={one} alt="" srcset="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>

        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
