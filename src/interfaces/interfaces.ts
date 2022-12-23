import { MouseEventHandler } from "react";

export interface IProps {
    id: any;
    name: string;
    status: string;
    species: string;
    location: {
        name: string
    };
    image: string;
}

export interface ICurrentPage {
    currentPage: number;
    lastPage: MouseEventHandler<HTMLButtonElement> | undefined;
    nextPage: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IListProps {
    characters: IProps[];
    loading: boolean;
}