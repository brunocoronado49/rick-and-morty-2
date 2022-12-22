import React from "react";
import Logo from "../assets/Rick_and_Morty.svg";
import "../styles/navbar.css";

export const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
            <div className="container-logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="container-autor">
                <p className="autor">Bruno Coronado</p>
            </div>
        </div>
    );
};
