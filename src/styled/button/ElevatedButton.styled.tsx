/**
 * ElevatedButton Component:
 *
 * This component is a styled button created using the 'styled-components' library. It allows customization
 * through optional props like elevation (box-shadow), border-radius, background color, and text color.
 *
 * @component
 *
 * @param {number} elevation - Optional number for box-shadow elevation.
 * @param {Color} bgColor - Optional color string for background color.
 * @param {Color} shadowColor - Optional color string for box-shadow color.
 *
 * @styled-properties
 * - background-color: Set to the provided bgColor or a default color (#2196f3).
 * - box-shadow: Set based on the provided elevation or a default shadow.
 *
 * @usage
 * // Import ElevatedButton
 * import ElevatedButton from './ElevatedButton';
 *
 * // Example usage within a component
 * const MyComponent = () => {
 *   return (
 *     <ElevatedButton
 *       elevation={3} // Optional elevation value
 *       bgColor="#4caf50" // Optional background color
 *       shadowColor="#333" // Optional shadow color
 *     >
 *       Click me
 *     </ElevatedButton>
 *   );
 * };
 */
import StyledButton from "./Button.styled";
import styled from "styled-components";
import { Color } from "types/Color";

interface ButtonProps {
  elevation?: number;
  bgColor?: Color;
  shadowColor?: Color;
}

const ElevatedButton = styled(StyledButton)<ButtonProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.primary};
  box-shadow: ${({ elevation, shadowColor }) =>
    elevation
      ? `0px ${elevation}px ${2 * elevation}px ${
          shadowColor || "rgba(0, 0, 0, 0.1)"
        }`
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"};
`;

export default ElevatedButton;
