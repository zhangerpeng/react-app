import React from "react";
import { Header } from "./Header";
import { Products } from "./Products";
import '../css/app.css';

export const App = () => {

    return (
     <div className="container">
        <Header name="zhangsan"></Header>
        <Products></Products>
     </div>
    );
};
