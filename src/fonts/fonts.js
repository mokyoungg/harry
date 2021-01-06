import { createGlobalStyle } from "styled-components";

import HarryFontWOFF from "./Harry-Potter.ttf.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'HarryFont';
        src: local('HarryFont'),
        url(${HarryFontWOFF}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
`;
