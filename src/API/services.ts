import { SetStateAction } from "react";
import {
    IProps,
    IPropsLocation,
    IPropsEpisode,
} from "../interfaces/interfaces";
import { charactersUrl, locationsUrl, episodesUrl } from "./ednpoint";

// Llamada para obtener y guardar a los personajes
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

// Obteniendo locaciones
export const getLocationsFetch = async (
    page: number,
    setLocations: (locations: SetStateAction<IPropsLocation[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    try {
        const url = `${locationsUrl}?page=${page}`;
        const response: Response = await fetch(url);
        const data: any = await response.json();
        setLoading(false);
        setLocations(data.results);
    } catch (err) {
        console.log(err);
        return;
    }
};

// Obteniendo episodios
export const getEpisodesFetch = async (
    page: number,
    setEpisode: (episodes: SetStateAction<IPropsEpisode[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    try {
        const url = `${episodesUrl}?page=${page}`;
        const response: Response = await fetch(url);
        const data: any = await response.json();
        setLoading(false);
        setEpisode(data.results)
    } catch (err) {
        console.log(err);
        return;
    }
};
