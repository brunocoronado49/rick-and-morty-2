import React from "react";

interface InfoCard {
    name: string;
    status: string;
    type: string;
    location: string;
}

export const Card: React.FC<InfoCard> = ({ name, status, type, location }) => {
    return (
        <div className="card">
            <div className="card-image"></div>
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
                                {status} - {type}
                            </p>
                        </>
                    }
                    <p className="subtitle-card">Last location</p>
                    <h5 className="location-card">{location}</h5>
                </div>
            </div>
        </div>
    );
};
