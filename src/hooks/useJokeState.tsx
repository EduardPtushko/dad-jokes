import { useEffect } from "react";
import useLocalStorageState from "./useLocalStorageState";
import useFetch from "./useFetch";

export interface JokeInterface {
    joke: string;
    rating: number;
    id: string;
}

export interface AppState {
    jokes: JokeInterface[];
    isLoading: boolean;
    isError: boolean;
}

const useJokeState = (
    initialState: AppState,
): [AppState, () => void, (dest: string, id: string) => void] => {
    const [stateLocal, setStateLocal] = useLocalStorageState(
        "jokesState",
        initialState,
    );
    const [state, fetchJokes] = useFetch(stateLocal);

    function changeRating(dest: string, id: string): void {
        let jokes = stateLocal.jokes.map(
            (joke: JokeInterface): JokeInterface => {
                return dest === "up"
                    ? joke.id === id
                        ? { ...joke, rating: joke.rating + 1 }
                        : joke
                    : joke.id === id
                    ? { ...joke, rating: joke.rating - 1 }
                    : joke;
            },
        );
        jokes = jokes.sort((a, b): number => b.rating - a.rating);
        setStateLocal({ ...stateLocal, jokes });
    }

    useEffect((): void => {
        setStateLocal(state);
    }, [state]);

    return [stateLocal, fetchJokes, changeRating];
};

export default useJokeState;
