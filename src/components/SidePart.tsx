/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SvgGrinTears from "./SvgGrinTears";
import { base, emoji, btn } from "../styles/SideStyles";

interface Props {
    fetchJokes(): void;
}

const SidePart = ({ fetchJokes }: Props): JSX.Element => {
    return (
        <div css={base}>
            <div>
                <h1>
                    <span>Dad</span> <span>Jokes</span>
                </h1>
                <div css={emoji}>
                    <SvgGrinTears />
                </div>
                <button css={btn} onClick={fetchJokes}>
                    New Jokes
                </button>
            </div>
        </div>
    );
};

export default SidePart;
