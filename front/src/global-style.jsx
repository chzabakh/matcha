import { createGlobalStyle } from "styled-components";

const theme = {
  mode: "light",
  pallete: {
    primary: "#0000ff",
    success: "#00ff00",
    error: "#ff0000",
  },
};

const GlobalStyle = createGlobalStyle`
    ${Object.entries(theme.pallete).map(
      ([color, value]) =>
        `.bg-${color}{background-color : ${value}} ` +
        `.text-${color}{color : ${value}}`
    )}

    .card{
        background-color: #fff;
        box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
        margin: 1rem;
    }
`;

export default GlobalStyle;
