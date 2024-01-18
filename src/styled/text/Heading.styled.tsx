/**
 * Reusable Heading component that dynamically renders heading elements (h1-h6) based on the specified level.
 *
 * @component
 * @example
 * // Import the Heading component
 * import Heading from './Heading';
 *
 * // Use the Heading component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <Heading level={1}>Main Title</Heading>
 *       <Heading level={2}>Subheading</Heading>
 *        //... Other heading levels ... 
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {number} props.level - Heading level (1 to 6).
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color.
 * @param {number} [props.size] - Font size in pixels.
 * @param {string} [props.font] - Font family. Defaults to the theme font family.
 * @param {string} [props.weight] - Font weight.
 * @param {string} [props.align] - Text alignment.
 * @param {ReactNode} props.children - Content to be rendered within the heading.
 *
 * @returns {JSX.Element} - Rendered Heading component.
 */


import React from "react";
import styled from "styled-components";
import { Color } from "types/Color";

interface HeadingProps {
  level: number;
  color?: Color;
  bgColor?: Color;
  size?: number;
  font?: string;
  weight?: string;
  align?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { level, children } = props;

  switch (level) {
    case 2:
      return <StyledH2 {...props}>{children}</StyledH2>;
    case 3:
      return <StyledH3 {...props}>{children}</StyledH3>;
    case 4:
      return <StyledH4 {...props}>{children}</StyledH4>;
    case 5:
      return <StyledH5 {...props}>{children}</StyledH5>;
    case 6:
      return <StyledH6 {...props} />;
    default:
      return <StyledH1 {...props}>{children}</StyledH1>;
  }
};

const StyledH1 = styled.h1<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

const StyledH2 = styled.h2<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

const StyledH3 = styled.h3<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

const StyledH4 = styled.h4<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

const StyledH5 = styled.h5<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

const StyledH6 = styled.h6<HeadingProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor};
  text-align: ${({ align }) => align};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

export default Heading;
