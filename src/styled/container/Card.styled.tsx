import styled from "styled-components";
import { Color } from "types/Color";

/**
 * Card Component
 *
 * A styled component representing a card with customizable styling options.
 *
 * @component
 *
 * @param {string} width - The width of the card. Defaults to "fit-content".
 * @param {string} height - The height of the card. Defaults to "fit-content".
 * @param {Color} shadowColor - The color of the card's shadow.
 * @param {Color} bgColor - The background color of the card.
 * @param {number} radius - The border radius of the card.
 * @param {number} elevation - The elevation or depth of the card's shadow.
 * @param {Object} padding - The padding of the card.
 * @param {number} padding.all - Padding applied to all sides of the card.
 * @param {Object} padding.only - Padding applied to specific sides of the card.
 * @param {number} padding.only.l - Left padding of the card.
 * @param {number} padding.only.r - Right padding of the card.
 * @param {number} padding.only.t - Top padding of the card.
 * @param {number} padding.only.b - Bottom padding of the card.
 * @param {Object} padding.symmetric - Symmetric vertical and horizontal padding.
 * @param {number} padding.symmetric.v - Vertical padding of the card.
 * @param {number} padding.symmetric.h - Horizontal padding of the card.
 * @param {Object} margin - The margin of the card.
 * @param {number} margin.all - Margin applied to all sides of the card.
 * @param {Object} margin.only - Margin applied to specific sides of the card.
 * @param {number} margin.only.l - Left margin of the card.
 * @param {number} margin.only.r - Right margin of the card.
 * @param {number} margin.only.t - Top margin of the card.
 * @param {number} margin.only.b - Bottom margin of the card.
 * @param {Object} margin.symmetric - Symmetric vertical and horizontal margin.
 * @param {number} margin.symmetric.v - Vertical margin of the card.
 * @param {number} margin.symmetric.h - Horizontal margin of the card.
 *
 * @example
 * <Card
 *   width="300px"
 *   height="200px"
 *   bgColor="#ffffff"
 *   shadowColor="#000000"
 *   radius={10}
 *   elevation={2}
 *   padding={{ all: 16 }}
 *   margin={{ all: 8 }}
 * >
 *   Content goes here
 * </Card>
 */

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
