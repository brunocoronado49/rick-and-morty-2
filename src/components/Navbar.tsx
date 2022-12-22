import React from "react";
import Logo from '../assets/Rick_and_Morty.svg'

export const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
            <div className="container-logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    );
};
