import React from "react";
import "../css/header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="home">HOME</div>
      <div className="login-register">
       <label>LOGIN</label>
       <label>REGISTER</label>
      </div>
    </div>
  );
};
