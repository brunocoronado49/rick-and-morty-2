import React from "react";
import { IProps } from "../interfaces/interfaces";
import "../styles/card.css";

export const Card: React.FC<IProps> = ({
    id,
    name,
    status,
    species,
    image,
    location,
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} className="img-card" />
            </div>
            <div className="card-info">
                <h3 className="card-name-character">{name}</h3>
                <div className="card-info-row">
                    {
                        <>
                            <div className="status-alert">
                                {status == "Alive" ? (
                                    <div className="alive"></div>
                                ) : (
                                    <div className="dead"></div>
                                )}
                            </div>
                            <p className="info-character">
                                {status} - {species}
                            </p>
                            <h5>{location.name}</h5>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
