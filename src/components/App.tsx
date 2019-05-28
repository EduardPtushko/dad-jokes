import React from "react";
import { css, Global } from "@emotion/core";
import back from "../assets/images/back.png";
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
                        background-image: url(${back});
                        background-size: cover;
                        background-position: center;
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
