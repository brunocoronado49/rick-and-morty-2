import React from "react";
import "../styles/menu.css";

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <ul className="ul-menu">
                <li className="li-menu">Characters</li>
                <li className="li-menu">Locations</li>
                <li className="li-menu">Episodes</li>
                <li className="li-menu">About</li>
            </ul>
        </div>
    );
};
