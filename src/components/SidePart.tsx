import React from "react";

interface Props {
    fetchJokes(): void;
}

const SidePart = ({ fetchJokes }: Props): JSX.Element => {
    return (
        <div>
            SidePart
            <button onClick={fetchJokes}>New Jokes</button>
        </div>
    );
};

export default SidePart;
