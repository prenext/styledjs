/**
 * Reusable styled component for rendering paragraphs with customizable styles.
 *
 * @component
 * @example
 * // Import the Paragraph component
 * import Paragraph from './Paragraph';
 *
 * // Use the Paragraph component in your JSX
 * const ExampleComponent = () => {
 *   return (
 *     <div>
 *       <Paragraph>
 *         This is a styled paragraph with default styles.
 *       </Paragraph>
 *       <Paragraph
 *         color="blue"
 *         bgColor="lightgray"
 *         size={1.2}
 *         weight="bold"
 *         font="Arial, sans-serif"
 *       >
 *         This is a customized paragraph with specified styles.
 *       </Paragraph>
 *     </div>
 *   );
 * };
 *
 * @param {object} props - Component properties.
 * @param {Color} [props.color] - Text color. Defaults to the theme text color.
 * @param {Color} [props.bgColor] - Background color. Defaults to 'inherit'.
 * @param {number} [props.size] - Font size in em units. Defaults to 1em.
 * @param {string} [props.weight] - Font weight. Defaults to 'normal'.
 * @param {string} [props.font] - Font family. Defaults to 'inherit'.
 *
 * @returns {JSX.Element} - Rendered Paragraph styled component.
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

const Paragraph = styled.p<TextProps>`
  color: ${({ color, theme }) => color || theme.text};
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  font-weight: ${({ weight }) => weight || "normal"};
  font-size: ${({ size }) => `${size}em` || "1em"};
  font-family: ${({ font }) => font || "inherit"};
`;

export default Paragraph;
