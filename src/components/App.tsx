import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const App = (): JSX.Element => {
    const state = useFetch();
    console.log(state);
    return <div>App</div>;
};

export default App;
