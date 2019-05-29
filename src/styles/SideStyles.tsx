import { css } from "@emotion/core";
import { laughing } from "./keyframes";

export const base = css`
    width: 25%;
    background-color: #9574cc;
    height: 100%;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2),
        0px 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    text-align: center;

    h1 > span + span {
        font-family: "Satisfy";
        margin-left: 0.25em;
        font-size: 1.15em;
        font-weight: 300;
    }

    & > div {
        margin-top: 7.5em;
    }
`;

export const emoji = css`
    width: 8em;
    height: 8em;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation: ${laughing} 1s infinite;
    }

    svg {
        z-index: 2;
        position: relative;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 8em;
        height: 8em;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
        background-color: #9574cc;
    }
`;

export const btn = css`
    margin-top: 1em;
    border: none;
    border-radius: 1em;
    padding: 0.7em 1em;
    font-size: 1em;
    font-weight: 300;
    color: white;
    background-color: #b1e2f8;
    background-image: linear-gradient(-40deg, #b1e2f8 50%, #f06091 50%);
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    outline: transparent;
    transition: all 0.2s;
    top: 0px;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
        top: 2px;
    }
    &:active {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        top: 4px;
    }
`;
