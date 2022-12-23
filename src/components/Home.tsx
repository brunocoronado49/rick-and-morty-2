import React from "react";
import { Navbar, Content } from "./index";
import "../styles/home.css";

export const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <Content />
            </div>
        </>
    );
};
