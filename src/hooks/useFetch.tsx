import { useReducer, useEffect } from "react";
import axios from "axios";
import useLocalStorageState from "./useLocalStorageState";

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
type Action =
    | { type: "FETCH_SUCCESS"; payload: JokeInterface[] }
    | { type: "FETCH_INIT" }
    | { type: "FETCH_FAILURE" };

function fetchReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, isLoading: true, isError: false };
        case "FETCH_SUCCESS":
            return {
                ...state,
                jokes: [...state.jokes, ...action.payload],
                isError: false,
                isLoading: false,
            };
        case "FETCH_FAILURE":
            return { ...state, isLoading: false, isError: true };

        default:
            throw new Error();
    }
}

const useFetch = (initialState: AppState): [AppState, () => void] => {
    const [stateLocal, setStateLocal] = useLocalStorageState(
        "jokesState",
        initialState,
    );
    const [state, dispatch] = useReducer(fetchReducer, stateLocal);
    const ids: string[] = stateLocal.jokes.reduce(
        (acc: string[], next: JokeInterface): string[] => {
            acc.push(next.id);
            return acc;
        },
        [],
    );

    async function fetchJokes(): Promise<T> {
        dispatch({ type: "FETCH_INIT" });
        try {
            let data: JokeInterface[] = [];

            while (data.length < 10) {
                const result = await axios({
                    method: "get",
                    url: "https://icanhazdadjoke.com/",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!ids.includes(result.data.id)) {
                    ids.push(result.data.id);
                    const joke = {
                        id: result.data.id,
                        joke: result.data.joke,
                        rating: 0,
                    };
                    data.push(joke);
                }
            }

            if (data.length === 10) {
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            }
        } catch (error) {
            dispatch({ type: "FETCH_FAILURE" });
        }
    }
    useEffect((): void => {
        const { jokes } = JSON.parse(window.localStorage.getItem("jokesState"));

        if (!window.localStorage.getItem("jokesState") || jokes.length === 0) {
            fetchJokes();
        }
    }, []);

    useEffect((): void => {
        setStateLocal(state);
    }, [state]);

    return [stateLocal, fetchJokes];
};

export default useFetch;
