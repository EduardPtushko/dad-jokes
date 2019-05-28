/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loaderAnimation } from "./styles/keyframes";

const base = css`
    position: relative;
    height: 100vh;

    div {
        color: yellow;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & span {
            font-size: 5rem;
            animation: ${loaderAnimation} 1.5s infinite;
            display: inline-block;
        }
        p {
            margin-top: 1em;
            font-size: 1.1rem;
        }
    }
`;

const Loader = (): JSX.Element => {
    return (
        <div css={base}>
            <div>
                <span>
                    <FontAwesomeIcon icon="grin" />
                </span>

                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
