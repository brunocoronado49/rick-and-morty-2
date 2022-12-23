import { useEffect, useState } from "react";
import { IProps } from "../interfaces/interfaces";

export const useCustomHook = () => {
    const [characters, steCharacters] = useState<IProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const lastPage = (): void => {
        setPage(page - 1);
    };

    const nextPage = (): void => {
        setPage(page + 1);
    };

    const fetchData = async (): Promise<void> => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setLoading(false);
        steCharacters(data.results);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return { page, lastPage, nextPage, characters, loading };
};
