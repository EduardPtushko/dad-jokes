/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import useJokeState from "../hooks/useJokeState";
import SidePart from "./SidePart";
import Joke from "./Joke";
import Loader from "./Loader";
import { useTrail } from "react-spring";

const base = css`
    width: 60em;
    margin: 0 auto;
    height: 80vh;
    display: flex;
    align-items: center;
`;
const jokesList = css`
    width: 75%;
    margin-top: 5%;
    margin-bottom: 5%;
    height: 90%;
    overflow: scroll;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2),
        6px 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const initialState = { jokes: [], isError: false, isLoading: false };

const ListJokes = (): JSX.Element => {
    const [
        { isError, isLoading, jokes },
        fetchJokes,
        changeRating,
    ] = useJokeState(initialState);
    const config = { mass: 5, tension: 2000, friction: 200 };

    const trail = useTrail(jokes.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config,
    });

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return (
            <div
                css={css`
                    ${base}
                    justify-content: center;
                    h2 {
                        font-size: 2rem;
                        text-align: center;
                        color: #b1b0b0;
                    }
                `}
            >
                <h2>
                    <span>We are sorry!</span>
                    <br />
                    <span>Something went wrong!</span>
                </h2>
            </div>
        );
    }
    return (
        <div css={base}>
            <SidePart fetchJokes={fetchJokes} />
            <div css={jokesList}>
                {trail.map(
                    (props, index): JSX.Element => (
                        <Joke
                            styles={props}
                            key={jokes[index].id}
                            id={jokes[index].id}
                            changeRating={changeRating}
                            joke={jokes[index].joke}
                            rating={jokes[index].rating}
                        />
                    ),
                )}
            </div>
        </div>
    );
};

export default ListJokes;
