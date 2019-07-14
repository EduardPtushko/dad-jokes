/** @jsx jsx */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, jsx } from "@emotion/core";
import EmojiRating from "./EmojiRating";
import { base, ratingBlock, ratingStyles } from "../styles/JokeStyles";

interface Props {
    joke: string;
    rating: number;
    id: string;
    changeRating: (dest: string, id: string) => void;
}

const Joke = ({ joke, rating, id, changeRating }: Props): JSX.Element => {
    function changeColor(): string {
        let h;
        if (rating === 0) {
            h = 20;
        } else if (rating === 1) {
            h = 40;
        } else if (rating === 2) {
            h = 60;
        } else if (rating === 3) {
            h = 80;
        } else if (rating === 4) {
            h = 100;
        } else if (rating === 5) {
            h = 120;
        } else if (rating === 6) {
            h = 140;
        } else if (rating === 7) {
            h = 160;
        } else if (rating === 8) {
            h = 180;
        } else if (rating === 9) {
            h = 200;
        } else if (rating >= 10) {
            h = 220;
        } else if (rating < 0) {
            h = 360;
        }

        return `hsl(${h},100%,50%)`;
    }

    return (
        <div css={base}>
            <span css={ratingBlock}>
                <button
                    onClick={(): void => changeRating("up", id)}
                    className="arrow-up"
                >
                    <FontAwesomeIcon icon="arrow-up" />
                </button>
                <span
                    css={css`
                        ${ratingStyles}
                        border: 3px solid ${changeColor()};
                    `}
                >
                    {rating}
                </span>

                <button
                    onClick={(): void => changeRating("down", id)}
                    className="arrow-down"
                >
                    <FontAwesomeIcon icon="arrow-down" />
                </button>
            </span>
            <span className="joke-text">{joke}</span>
            <EmojiRating rating={rating} />
        </div>
    );
};

export default Joke;
