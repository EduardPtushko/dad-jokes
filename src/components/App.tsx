import React from "react";
import { css, Global } from "@emotion/core";
import ListJokes from "./ListJokes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowUp,
    faArrowDown,
    faGrin,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faArrowDown, faGrin);

const App = (): JSX.Element => {
    return (
        <div>
            <Global
                styles={css`
                    :root {
                        box-sizing: border-box;
                    }
                    *,
                    *::before,
                    *::after {
                        box-sizing: inherit;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-image: linear-gradient(
                            -45deg,
                            #b1e2f8 50%,
                            #f06091 50%
                        );
                        background-size: cover;
                        color: #969696;
                        font-family: "Noto Sans HK", "Times New Roman",
                            sans-serif;
                    }
                `}
            />

            <ListJokes />
        </div>
    );
};

export default App;
