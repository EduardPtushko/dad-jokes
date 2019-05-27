import React from "react";
import useFetch from "../hooks/useFetch";
import SidePart from "./SidePart";
import Joke from "./Joke";
import Loader from "./Loader";

const initialState = { jokes: [], isError: false, isLoading: false };

const ListJokes = (): JSX.Element => {
    const [{ isError, isLoading, jokes }, fetchJokes] = useFetch(initialState);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div>
            <SidePart fetchJokes={fetchJokes} />
            {jokes.map(
                ({ id, joke, rating }): JSX.Element => (
                    <Joke key={id} joke={joke} rating={rating} />
                ),
            )}
        </div>
    );
};

export default ListJokes;
