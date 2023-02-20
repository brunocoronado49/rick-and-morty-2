import React from "react";
import { Route } from "wouter";
import "../styles/menu.css";

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <ul className="ul-menu">
                <Route path="/characters">
                    <li className="li-menu">Characters</li>
                </Route>
                <Route path="/characters">
                    <li className="li-menu">Locations</li>
                </Route>
                <Route path="/characters">
                    <li className="li-menu">Episodes</li>
                </Route>
                <Route path="/characters">
                    <li className="li-menu">About</li>
                </Route>
            </ul>
        </div>
    );
};
