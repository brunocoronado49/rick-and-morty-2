import React from "react";
import { Card, Loading } from "./index";
import { IListProps } from "../interfaces/interfaces";

export const List: React.FC<IListProps> = ({ characters, loading }) => {
    return (
        <div className="list">
            <h1 className="list-title">Personajes</h1>
            {loading ? (
                <Loading />
            ) : (
                characters.map((character) => {
                    return (
                        <div className="list-col" key={character.id}>
                            <Card {...character} />
                        </div>
                    );
                })
            )}
        </div>
    );
};
