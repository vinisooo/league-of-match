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

    a {
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
        transition: 0.3s ease;
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

        --color-error: #ed4337
    }

    ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #16db65;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #058c42;
}
::-webkit-scrollbar-thumb:active {
  background: #058c42;
}
::-webkit-scrollbar-track {
  background: #26262c;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #393a41;
}
::-webkit-scrollbar-track:active {
  background: #393a41;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`