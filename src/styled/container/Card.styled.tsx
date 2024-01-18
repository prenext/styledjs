import styled from "styled-components";
import { Color } from "types/Color";

interface CardProps {
  width?: string;
  height?: string;
  shadowColor?: Color;
  bgColor?: Color;
  radius?: number;
  elevation?: number;
  padding?: {
    all?: number;
    only?: { l?: number; r?: number; t?: number; b?: number };
    symmetric?: { v?: number; h?: number };
  };
  margin?: {
    all?: number;
    only?: { l?: number; r?: number; t?: number; b?: number };
    symmetric?: { v?: number; h?: number };
  };
}

const Card = styled.div<CardProps>`
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  background-color: ${({ bgColor, theme }) => bgColor || theme.bg};
  border-radius: ${({ radius, theme }) =>
    radius !== undefined ? `${radius}px` : `${theme.radius}px`};
  box-shadow: ${({ elevation, shadowColor, theme }) =>
    `0px ${elevation !== undefined ? elevation * 1 + "px" : "4px"} ${
      elevation !== undefined ? elevation * 4 + "px" : "8px"
    } ${shadowColor ? shadowColor : theme.shadowColor}`};
  padding: ${({ padding }) =>
    padding
      ? padding.only
        ? `${padding.only.t || 0}px ${padding.only.r || 0}px ${
            padding.only.b || 0
          }px ${padding.only.l || 0}px`
        : padding.symmetric
        ? `${padding.symmetric.v || 0}px ${padding.symmetric.h || 0}px`
        : `${padding.all || 0}px`
      : "16px"};
  margin: ${({ margin }) =>
    margin
      ? margin.only
        ? `${margin.only.t || 0}px ${margin.only.r || 0}px ${
            margin.only.b || 0
          }px ${margin.only.l || 0}px`
        : margin.symmetric
        ? `${margin.symmetric.v || 0}px ${margin.symmetric.h || 0}px`
        : `${margin.all || 0}px`
      : "8px"};
`;

export default Card;
