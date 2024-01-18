/**
 * Reusable styled component for rendering titles (h1) with customizable styles.
 *
 * @component
 * @example
 * // Import the Title component
 * import Title from './Title';
 *
 * // Use the Title component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <Title>
 *         Default Title with theme styles.
 *       </Title>
 *       <Title
 *         color="red"
 *         bgColor="lightblue"
 *         size={2.5}
 *         weight="bold"
 *         font="Georgia, serif"
 *       >
 *         Customized Title with specified styles.
 *       </Title>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color. Defaults to 'inherit'.
 * @param {number} [props.size] - Font size in em units. Defaults to 2em.
 * @param {string} [props.weight] - Font weight. Defaults to 'bold'.
 * @param {string} [props.font] - Font family. Defaults to 'inherit'.
 *
 * @returns {JSX.Element} - Rendered Title styled component.
 */

import styled from "styled-components";
import { Color } from "types/Color";

interface TextProps {
  color?: Color;
  bgColor?: Color;
  size?: number;
  weight?: string;
  font?: string;
}

const Title = styled.h1<TextProps>`
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  font-weight: ${({ weight }) => weight || "bold"};
  font-size: ${({ size }) => `${size}em` || "2em"};
  font-family: ${({ font }) => font || "inherit"};
`;

export default Title;
