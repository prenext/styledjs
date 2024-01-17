/**
 * PrimaryButton Component:
 *
 * This component is a styled button that extends the base `StyledButton` component. It serves as a primary
 * button with customizable background color. Users can provide a specific background color using the `bgColor` prop.
 *
 * @component
 *
 * @param {Color} bgColor - Optional color string for the background color of the button.
 *
 * @styled-properties
 * - background-color: Set to the provided `bgColor` or the theme's primary color.
 * - color: Set to the provided text color or the theme's text color.
 *
 * @example
 * // Import PrimaryButton
 * import PrimaryButton from './PrimaryButton';
 *
 * // Example usage within a component
 * const MyComponent = () => {
 *   return (
 *     <PrimaryButton
 *       bgColor="#2196f3" // Optional background color
 *       color="#ffffff" // Optional text color
 *     >
 *       Click me
 *     </PrimaryButton>
 *   );
 * };
 */
import styled from "styled-components";
import StyledButton from "./Button.styled";
import { Color } from "types/Color";

interface ButtonProps {
  bgColor?: Color;
}

const PrimaryButton = styled(StyledButton)<ButtonProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.primary};
`;

export default PrimaryButton;
