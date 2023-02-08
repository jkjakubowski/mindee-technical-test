import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type TitleProps = {
  children: string;
};

const StyledTitle = styled.h1<TitleProps>`
  font-family: "Eina Bold", sans-serif;
  font-size: 48px;
  color: #363636;
`;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);
