/**
 * Reusable styled component for rendering subtitles (h2) with customizable styles.
 *
 * @component
 * @example
 * // Import the Subtitle component
 * import Subtitle from './Subtitle';
 *
 * // Use the Subtitle component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <Subtitle>
 *         Default Subtitle with theme styles.
 *       </Subtitle>
 *       <Subtitle
 *         color="green"
 *         bgColor="lightyellow"
 *         size={1.8}
 *         weight="bold"
 *         font="Helvetica, sans-serif"
 *       >
 *         Customized Subtitle with specified styles.
 *       </Subtitle>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color. Defaults to 'inherit'.
 * @param {number} [props.size] - Font size in em units. Defaults to 1.5em.
 * @param {string} [props.weight] - Font weight. Defaults to 'normal'.
 * @param {string} [props.font] - Font family. Defaults to 'inherit'.
 *
 * @returns {JSX.Element} - Rendered Subtitle styled component.
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

const Subtitle = styled.h2<TextProps>`
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  font-weight: ${({ weight }) => weight || "normal"};
  font-size: ${({ size }) => `${size}em` || "1.5em"};
  font-family: ${({ font }) => font || "inherit"};
`;

export default Subtitle;
