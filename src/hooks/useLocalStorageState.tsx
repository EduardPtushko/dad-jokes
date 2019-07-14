import React, { useState, useEffect } from "react";
import { AppState } from "./useJokeState";

const useLocalStorageState = (
    key: string,
    defaultVal: AppState,
): [AppState, React.Dispatch<any>] => {
    const [stateLocal, setStateLocal] = useState(
        (): AppState => {
            let value;
            try {
                value = JSON.parse(
                    window.localStorage.getItem(key) || String(defaultVal),
                );
            } catch (e) {
                value = defaultVal;
            }

            return value;
        },
    );

    useEffect((): void => {
        window.localStorage.setItem(key, JSON.stringify(stateLocal));
    }, [stateLocal]);

    return [stateLocal, setStateLocal];
};

export default useLocalStorageState;
