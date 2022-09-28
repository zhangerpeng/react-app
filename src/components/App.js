import React from "react";
import { Header } from "./Header";
import { Products } from "./Products";
import '../css/app.css';
import { ToolBox } from "./ToolBox";

export const App = () => {

    return (
     <div className="container">
        <Header name="zhangsan"></Header>
        <ToolBox></ToolBox>
        <Products></Products>
     </div>
    );
};
