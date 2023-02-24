import React from "react";
import { List, NavPage, Menu } from "./index";
import { useCustomHook } from "../hooks/useCustomHook";
import "../styles/content.css";

export const Content: React.FC = () => {
    const { page, lastPage, nextPage, characters, loading } = useCustomHook();

    return page > 0 ? (
        <div className="content">
            <NavPage
                currentPage={page}
                lastPage={lastPage}
                nextPage={nextPage}
            />
            <div className="content-row">
                <div className="content-col">
                    <List characters={characters} loading={loading} />
                </div>
            </div>
        </div>
    ) : (
        <div className="404">
            <h1 className="404-title">No characters</h1>
            <button onClick={nextPage} className="404-btn">
                Turn back
            </button>
        </div>
    );
};
