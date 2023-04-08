import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "200px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };


    return (
        <div>
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "rgb(70, 42, 7)",}} >Home</NavLink>
            <NavLink to="/meals" exact style={linkStyles} activeStyle={{background: "rgb(70, 42, 7)",}} >Meals</NavLink>
            <NavLink to="/drinks" exact style={linkStyles} activeStyle={{background: "rgb(70, 42, 7)",}} >Drinks</NavLink>
            <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "rgb(70, 42, 7)",}} >About</NavLink>
        </div>
    )
}

export default NavBar