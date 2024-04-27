/**
 * StyledButton Component
 *
 * A base styled button component that can be extended for various button types.
 *
 * @component
 *
 * @param {string} color - The text color of the button. Defaults to the text color from the theme.
 * @param {number} radius - The border-radius of the button. Can be a numeric value or a string. Defaults to "0px".
 *
 * @example
 * // Basic usage
 * const MyButton = styled(StyledButton)`
 *   /* Additional styles specific to MyButton * /
 * `;
 *
 * @example
 * //Customizing the button color and radius
 * const CustomButton = styled(StyledButton)`
 *   color: #ff5733; // Custom text color
 *   radius: 10; // Custom border-radius in pixels
 * `;
 */
import styled from "styled-components";

interface StyledButtonProps {
  color?: string;
  radius?: number;
  font?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  color: ${({ color, theme }) => color || theme.text};
  padding: 5px 10px;
  font-family: ${({ font, theme }) => font || theme.fontFamily};
  border-radius: ${({ radius, theme }) =>
    typeof radius === "number" ? `${radius}px` : `${theme.radius}px`};
  border: none;
  cursor: pointer;
  &:hover {
    scale: 1.01;
    transform: scale 0.3s ease-in;
  }
  &:active {
    transform: scale(0.99);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default StyledButton;
