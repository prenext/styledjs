/**
 * Reusable styled component for highlighting text with customizable colors and font weight.
 *
 * @component
 * @example
 * // Import the Highlight component
 * import Highlight from './Highlight';
 *
 * // Use the Highlight component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <p>This is some <Highlight>highlighted</Highlight> text.</p>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color. Defaults to the theme primary color.
 * @param {string} [props.weight] - Font weight. Defaults to 'bold'.
 *
 * @returns {JSX.Element} - Highlighted text span styled component.
 */
import styled from "styled-components";
import { Color } from "types/Color";

interface TextProps {
  color?: Color;
  bgColor?: Color;
  weight?: string;
}

const Highlight = styled.span<TextProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.primary};
  color: ${({ color, theme }) => color || theme.text};
  font-weight: ${({ weight }) => weight || "bold"};
`;

export default Highlight;
