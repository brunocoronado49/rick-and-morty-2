import { useEffect, useState } from "react";
import { IProps } from "../interfaces/interfaces";
import { getCharactersFetch } from "../API/endpoints";

export const useCustomHook = () => {
    const [characters, setCharacters] = useState<IProps[]>([]);
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
    }, [page]);

    return { page, lastPage, nextPage, characters, loading };
};
