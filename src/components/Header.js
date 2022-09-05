import React from "react";
import "../css/header.css";

export const Header = (props) => {
  const loginName = props.name;
  return (
    <div className="header">
      <div className="home">HOME</div>
      <div className="login-register">
        <label>LOGIN</label>
        {nicknameFC(loginName)}
      </div>
    </div>
  );
};

const nicknameFC = (name) => {
  if (name) {
    return (
      <>
        <label>{name}</label>
      </>
    );
  } else {
    return (
      <>
        <label>REGISTER</label>
      </>
    );
  }
};
