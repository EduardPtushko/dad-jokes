import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    joke: string;
    rating: number;
}

const Joke = ({ joke, rating }: Props): JSX.Element => {
    // const [rating, setRating] = useState(0);

    return (
        <div>
            <span>
                <span>
                    <FontAwesomeIcon icon="arrow-up" />
                </span>
                {rating}
                <span>
                    <FontAwesomeIcon icon="arrow-down" />
                </span>
            </span>
            <span>{joke}</span>
            <span>😕</span>
        </div>
    );
};

export default Joke;
