import React from "react";
import ListJokes from "./ListJokes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowUp,
    faArrowDown,
    faLaugh,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faArrowDown, faLaugh);

const App = (): JSX.Element => {
    return (
        <div>
            <ListJokes />
        </div>
    );
};

export default App;
