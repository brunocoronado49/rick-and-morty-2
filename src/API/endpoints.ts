import { SetStateAction } from "react";
import { IProps } from "../interfaces/interfaces";

export const getCharactersFetch = async (
    page: number,
    setCharacters: (characters: SetStateAction<IProps[]>) => void,
    setLoading: (loading: boolean) => void
): Promise<{} | undefined> => {
    try {
        const response: Response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data: any = await response.json();
        setLoading(false);
        setCharacters(data.results);
    } catch (err) {
        console.log(err);
        return;
    }
};
