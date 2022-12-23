import React from "react";
import { List, NavPage } from "./index";
import { useCustomHook } from "../hooks/useCustomHook";

export const Content: React.FC = () => {
    const { page, lastPage, nextPage, characters, loading } = useCustomHook();

    return (
        <div className="content">
            <NavPage
                currentPage={page}
                lastPage={lastPage}
                nextPage={nextPage}
            />
            <List characters={characters} loading={loading} />
        </div>
    );
};
