import { createGlobalStyle } from "styled-components";
import { Colors } from "./color";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  iframe {
    max-width: calc(100vw - 100px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: ${Colors.Black0};
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`