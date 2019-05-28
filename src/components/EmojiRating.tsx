/** @jsx jsx */
import { jsx, css } from "@emotion/core";

interface Props {
    rating: number;
}

const EmojiRating = ({ rating }: Props): JSX.Element => {
    function renderEmoji(): string {
        let emoji;
        switch (true) {
            case rating <= -7:
                emoji = "😩";
                break;
            case rating <= -3 && rating > -6:
                emoji = "😟";
                break;
            case rating < 0 && rating > -3:
                emoji = "😒";
                break;
            case rating > 0 && rating < 2:
                emoji = "😀";
                break;
            case rating >= 2 && rating <= 4:
                emoji = "😃";
                break;
            case rating > 4 && rating <= 6:
                emoji = "😁";
                break;
            case rating > 6 && rating <= 9:
                emoji = "😆";
                break;
            case rating > 9 && rating <= 11:
                emoji = "😂";
                break;
            case rating > 11:
                emoji = "🤣";
                break;

            default:
                emoji = "😕";
                break;
        }
        return emoji;
    }

    const base = css`
        span {
            font-size: 3rem;
            text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2),
                0px 5px 15px rgba(0, 0, 0, 0.19);
            cursor: pointer;
            display: inline-block;
            transition: transform 0.2s ease-in-out;
            margin-left: 0.5em;

            &:hover {
                transform: rotate(20deg);
            }
        }
    `;
    return (
        <div css={base}>
            <span>{renderEmoji()}</span>
        </div>
    );
};

export default EmojiRating;
