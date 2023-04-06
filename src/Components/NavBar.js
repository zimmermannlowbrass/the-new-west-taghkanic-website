import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };


    return (
        <div>
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Home</NavLink>
            <NavLink to="/meals" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Meals</NavLink>
            <NavLink to="/drinks" exact style={linkStyles} activeStyle={{background: "darkblue",}} >Drinks</NavLink>
        </div>
    )
}

export default NavBar