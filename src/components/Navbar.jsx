import React from "react";
import "../style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WeChat</span>
      <div className="user">
        <img src="" alt="" />
        <span>jhon</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
