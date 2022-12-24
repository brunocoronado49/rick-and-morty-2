import React from "react";
import { ICurrentPage } from "../interfaces/interfaces";
import "../styles/navpage.css";

export const NavPage: React.FC<ICurrentPage> = ({
    currentPage,
    lastPage,
    nextPage,
}) => {
    return (
        <div className="current-page-container">
            <div className="last-page">
                <button className="btn-change-page" onClick={lastPage}>
                    Last page
                </button>
            </div>
            <p className="current-page">{currentPage}</p>
            <div className="next-page">
                <button className="btn-change-page" onClick={nextPage}>
                    Next page
                </button>
            </div>
        </div>
    );
};
