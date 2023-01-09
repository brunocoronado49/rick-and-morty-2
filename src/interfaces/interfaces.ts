import { SetStateAction } from "react";

export interface IProps {
    id: any;
    name: string;
    status: string;
    species: string;
    location: {
        name: string;
    };
    image: string;
}

export interface IPropsLocation {
    name: string;
    type: string;
    dimension: string;
}

export interface IPropsEpisode {
    name: string;
    air_date: string;
    episode: string;
}

export interface ICurrentPage {
    currentPage: number;
    lastPage: () => void;
    nextPage: () => void;
}

export interface IListProps {
    characters: IProps[];
    loading: boolean;
}
