/**
 * SecondaryButton Component:
 *
 * This component is a styled button that extends the base `StyledButton` component. It serves as a secondary
 * button with customizable background color. Users can provide a specific background color using the `bgColor` prop.
 *
 * @component
 *
 * @param {Color} bgColor - Optional color string for the background color of the button.
 *
 * @styled-properties
 * - background-color: Set to the provided `bgColor` or the theme's secondary color.
 * - color: Set to the provided text color or the theme's text color.
 *
 * @example
 * // Import SecondaryButton
 * import SecondaryButton from './SecondaryButton';
 *
 * // Example usage within a component
 * const MyComponent = () => {
 *   return (
 *     <SecondaryButton
 *       bgColor="#ff5733" // Optional background color
 *       color="#ffffff" // Optional text color
 *     >
 *       Click me
 *     </SecondaryButton>
 *   );
 * };
 */
import styled from "styled-components";
import StyledButton from "./Button.styled";
import { Color } from "types/Color";

interface ButtonProps {
  bgColor?: Color;
}

const SecondaryButton = styled(StyledButton)<ButtonProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.secondary};
  color: ${({ color, theme }) => color || theme.text};
`;

export default SecondaryButton;
