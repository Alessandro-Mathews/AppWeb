import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({title}) => {
    return(
        <div className="Header">
            <div className="title">{title}</div>
            <div className="nav-container">
                <NavLink className="item" to="/">Login</NavLink>
                <NavLink className="item" to="/sobre">Sobre</NavLink>
                <NavLink className="item" to="/register">Register</NavLink>

            </div>
    </div>
    )
}

export default Header;