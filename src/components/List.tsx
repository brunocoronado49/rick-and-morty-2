import React from "react";
import { Card, Loading } from "./index";
import { IListProps } from "../interfaces/interfaces";
import "../styles/list.css";

export const List: React.FC<IListProps> = ({ characters, loading }) => {
    return (
        <>
            <h1 className="list-title">Personajes</h1>
            <div className="list">
                {loading ? (
                    <Loading />
                ) : (
                    characters.map((character) => {
                        return (
                            <div className="list-row" key={character.id}>
                                <div className="list-col">
                                    <Card {...character} />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};
