import { SetStateAction } from "react";
import { IProps } from "../interfaces/interfaces";
import { charactersUrl } from "./ednpoint";

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
