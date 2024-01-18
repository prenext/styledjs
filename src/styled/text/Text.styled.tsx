/**
 * Reusable styled component for rendering text spans with customizable styles.
 *
 * @component
 * @example
 * // Import the Text component
 * import Text from './Text';
 *
 * // Use the Text component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <Text>
 *         Default text with theme styles.
 *       </Text>
 *       <Text
 *         color="purple"
 *         bgColor="lightgray"
 *         size={1.2}
 *         weight="bold"
 *         font="Courier New, monospace"
 *       >
 *         Customized text with specified styles.
 *       </Text>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {string} [props.font] - Font family. Defaults to the theme font family.
 * @param {number} [props.size] - Font size in em units. Defaults to 'auto'.
 * @param {string} [props.weight] - Font weight. Defaults to 'normal'.
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color. Defaults to 'inherit'.
 *
 * @returns {JSX.Element} - Rendered Text span styled component.
 */

import styled from "styled-components";
import { Color } from "types/Color";

interface TextProps {
  font?: string;
  size?: number;
  weight?: string;
  color?: Color;
  bgColor?: Color;
}

const Text = styled.span<TextProps>`
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  font-weight: ${({ weight }) => weight || "normal"};
  font-size: ${({ size }) => `${size}em` || "auto"};
  font-family: ${({ font, theme }) => font || theme.fontFamily};
`;

export default Text;
