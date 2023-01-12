import { createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.Title};
    color: ${({ theme }) => theme.Label};
    color: ${({ theme }) => theme.Anchor};
    transition: all 0.50s linear;
  }`

