import { useEffect, useState } from "react";
import {
    IProps,
    IPropsLocation,
    IPropsEpisode,
} from "../interfaces/interfaces";
import {
    getCharactersFetch,
    getLocationsFetch,
    getEpisodesFetch,
} from "../API/services";

export const useCustomHook = () => {
    const [characters, setCharacters] = useState<IProps[]>([]);
    const [locations, setLocations] = useState<IPropsLocation[]>([]);
    const [episodes, setEpisodes] = useState<IPropsEpisode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const lastPage = (): void => {
        setPage(page - 1);
    };

    const nextPage = (): void => {
        setPage(page + 1);
    };

    useEffect(() => {
        getCharactersFetch(page, setCharacters, setLoading);
        getLocationsFetch(page, setLocations, setLoading);
        getEpisodesFetch(page, setEpisodes, setLoading);
    }, [page]);

    return {
        page,
        lastPage,
        nextPage,
        characters,
        locations,
        episodes,
        loading,
    };
};
