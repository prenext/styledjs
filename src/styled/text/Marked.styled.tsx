/**
 * Reusable styled component for a marked text span.
 *
 * @component
 * @example
 * // Import the Marked component
 * import Marked from './Marked.styled';
 *
 * // Use the Marked component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <p>This is some text with a <Marked>marked</Marked> portion.</p>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {Color} [props.color] - Text color. Defaults to 'inherit'.
 * @param {Color} [props.bgColor] - Background color. Defaults to 'lightblue'.
 * @param {string} [props.weight] - Font weight. Defaults to 'normal'.
 *
 * @returns {JSX.Element} - Marked text span styled component.
 */
import styled from "styled-components";
import { Color } from "types/Color";

interface TextProps {
  color?: Color;
  bgColor?: Color;
  weight?: string;
}

const Marked = styled.span<TextProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.secondary};
  color: ${({ color, theme }) => color || theme.text};
  font-weight: ${({ weight }) => weight || "normal"};
`;

export default Marked;
