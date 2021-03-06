import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
   html {
      width: 100%;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background-color: ${theme.colors.white01};
      font-family: ${theme.fonts.main};
   }

   body::-webkit-scrollbar {
      width: 0.75rem;
   }

   body::-webkit-scrollbar-track {
      background-color: ${theme.colors.white01};
   }

   body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.purple02};
      border-radius: 20px;
      border: 3px solid ${theme.colors.white01};
   }

   button, a {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }

   img {
      display: block;
      max-width: 100%;
   }

   @media (max-width: 1080px) {
      html {
         font-size: 93.75%;
      }
   }

   @media (max-width: 720px) {
      html {
         font-size: 87.5%;
      }
   }
`;
