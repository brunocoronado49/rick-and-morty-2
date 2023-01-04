import { SetStateAction } from "react";
import {
    IProps,
    IPropsLocation,
    IPropsEpisode,
} from "../interfaces/interfaces";
import { charactersUrl } from "./ednpoint";

export const getCharactersFetch = async (
    page: number,
    setCharacters: (characters: SetStateAction<IProps[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    try {
        const url = `${charactersUrl}?page=${page}`;
        const response: Response = await fetch(url);
        const data: any = await response.json();
        setLoading(false);
        setCharacters(data.results);
    } catch (err) {
        console.log(err);
        return;
    }
};

export const getLocationsFetch = async (
    page: number,
    setLocations: (characters: SetStateAction<[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    return;
};

export const getEpisodesFetch = async (
    page: number,
    setEpisode: (characters: SetStateAction<[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    return;
};
