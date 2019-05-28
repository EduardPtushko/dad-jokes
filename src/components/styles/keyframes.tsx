import { keyframes } from "@emotion/core";

export const laughing = keyframes`
    0% {
        transform: translate(0px, 0px) rotate(0deg) ;
    }
    15% {
        transform: translate(-2.5px, -2.5px) rotate(-5deg) ;
    }
    25% {
        transform: translate(2.5px, 2.5px) rotate(5deg) ;
    }
    50% {
        transform: translate(-2.5px, -2.5px) rotate(-5deg) ;
    }
    75% {
        transform: translate(2.5px, 2.5px) rotate(5deg);
    }
    100% {
        transform: translate(0px) rotate(0deg);
    }
`;

export const loaderAnimation = keyframes`
0% {
    transform: rotate(0)
}
100% {
    transform: rotate(360deg)
}
`;
