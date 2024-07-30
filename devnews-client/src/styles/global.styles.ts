import { createGlobalStyle } from 'styled-components';

import themes from './themes.styles';

const { fonts } = themes;

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.family.main};
    }

    html {
        font-size: 62.5%;
    }
`;
