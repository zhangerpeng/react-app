import React from "react";
import "../css/toolbox.css";
export const ToolBox = () => {
  return (
    <div className="toolbox">
      <div className="store">STORE</div>
      <div className="search-bar">
      <input class="input" type="text" placeholder="search product"/>
      </div>
      <div className="shopcart">
        shopcart
      </div>
      
    </div>
  );
};
