import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, main,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, select, textarea {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        line-height: 1;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    
    body{
        background-color: #26262C;
        color: #ffffff;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-black-1: #020202;
        --color-black-2: #131316;

        --color-grey-1: #26262C;
        --color-grey-2: #393A41;
        --color-grey-3: #6A6B70;

        --color-white: #FFFFFF;

        --color-brand-1: #16db65;
        --color-brand-2: #058c42;
        --color-brand-3: #04471c;
        --color-brand-4: #0D2818;
    }
`