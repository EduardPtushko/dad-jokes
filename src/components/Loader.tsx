/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loaderAnima = keyframes`
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
`;
const base = css`
    color: yellow;
    text-align: center;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & span {
        font-size: 5rem;
        animation: ${loaderAnima} 1.5s infinite;
        display: inline-block;
    }
    p {
        margin-top: 1em;
        font-size: 1.1rem;
    }
`;

const Loader = (): JSX.Element => {
    return (
        <div css={base}>
            <span>
                <FontAwesomeIcon icon="grin" />
            </span>

            <p>Loading...</p>
        </div>
    );
};

export default Loader;
