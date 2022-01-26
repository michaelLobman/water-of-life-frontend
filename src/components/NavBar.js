import React from "react";
import { NavLink } from "react-router-dom";



function NavBar(){

    const linkStyle = {
        padding: "10px",
        textAlign: "center",
        fontSize: "1.8vw"
    }

    const activeStyle = {
        background: "black",
        color: "white"
    }
    return(
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyle}
                activeStyle={activeStyle}
            >
                Home
            </NavLink>
            <NavLink
                to="/regions"
                exact
                style={linkStyle}
                activeStyle={activeStyle}
            >
                Regions 
            </NavLink>
            <NavLink
                to="/distilleries"
                exact
                style={linkStyle}
                activeStyle={activeStyle}
            >
                distilleries
            </NavLink>
        </div>

    )
}

export default NavBar;