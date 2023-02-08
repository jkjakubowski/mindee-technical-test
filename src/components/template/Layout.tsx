import { FC } from "react";
import { StyledEngineProvider } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Eina';
    src: "../../../public/fonts/Eina02-Regular.ttf";
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Eina Bold';
    src: "../../../public/fonts/Eina02-Bold.ttf";
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  
  h1 {font-family: "Eina Bold"}`;

const StyledLayout = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <StyledLayout>{children}</StyledLayout>
    </StyledEngineProvider>
  );
};

export default Layout;
