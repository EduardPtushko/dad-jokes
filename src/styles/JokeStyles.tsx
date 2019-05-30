import { css } from "@emotion/core";
import { moveUp, moveDown } from "../styles/keyframes";

export const base = css`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid transparent;
    padding: 0.5em;

    .joke-text {
        margin-left: 1em;
        margin-right: auto;
    }
`;

export const ratingBlock = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5em;

    button {
        border: none;
        padding: 0;
        color: inherit;
        font-size: 1.1rem;
        cursor: pointer;
        outline: transparent;
        transition: color 0.3s;
    }
    .arrow-up {
        &:hover {
            color: #b1e2f8;
            animation: ${moveUp} 1s ease-in;
        }
    }

    .arrow-down {
        &:hover {
            color: #f05f90;
            animation: ${moveDown} 1s ease-in;
        }
    }
`;

export const ratingStyles = css`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 2.1em;
    margin: 0 0.3em;
    box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.2),
        0px 5px 15px 0 rgba(0, 0, 0, 0.19);
`;
