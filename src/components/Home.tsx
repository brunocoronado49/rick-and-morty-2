import React from "react";
import { Navbar } from "./Navbar";
import { Content } from './Content'
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
