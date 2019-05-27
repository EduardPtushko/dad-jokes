import React, { useReducer, useEffect } from "react";
import axios from "axios";

interface Joke {
    id: string;
    joke: string;
    status: number;
}
interface State {
    jokes: Joke[];
    isLoading: boolean;
    isError: boolean;
}
type Action =
    | { type: "FETCH_SUCCESS"; payload: Joke[] }
    | { type: "FETCH_INIT" }
    | { type: "FETCH_FAILURE" };

function fetchReducer(state: State, action: Action): State {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, isLoading: true, isError: false };
        case "FETCH_SUCCESS":
            return {
                ...state,
                jokes: action.payload,
                isError: false,
                isLoading: false,
            };
        case "FETCH_FAILURE":
            return { ...state, isLoading: false, isError: true };

        default:
            throw new Error();
    }
}

const initialState: State = { jokes: [], isError: false, isLoading: false };

const useFetch = (): State => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect((): void | (() => void) => {
        let didCancel = false;

        async function fetchJokes(): Promise<T> {
            dispatch({ type: "FETCH_INIT" });
            try {
                let data = [];
                let ids: string[] = [];
                for (let i = 0; i < 15 || data.length < 10; i++) {
                    const result = await axios({
                        method: "get",
                        url: "https://icanhazdadjoke.com/",
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    if (!ids.includes(result.data.id)) {
                        data.push(result.data);
                    }
                }

                if (!didCancel) {
                    if (data.length === 10) {
                        dispatch({ type: "FETCH_SUCCESS", payload: data });
                    }
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        }

        fetchJokes();

        return (): void => {
            didCancel = true;
        };
    }, []);

    return state;
};

export default useFetch;
