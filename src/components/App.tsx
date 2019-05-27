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
                    body {
                        margin: 0;
                        padding: 0;
                        background-image: url(${back});
                        background-size: cover;
                    }
                `}
            />

            <ListJokes />
        </div>
    );
};

export default App;
