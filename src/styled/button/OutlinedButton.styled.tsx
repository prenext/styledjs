import styled, { useTheme } from "styled-components";
import StyledButton from "./Button.styled";
import { Color } from "types/Color";

interface OutlinedButtonProps {
  elevation?: number;
  borderWidth?: number;
  borderColor?: Color;
}

const OutlinedButton = styled(StyledButton)<OutlinedButtonProps>`
  color: ${({ color, theme }) => color || theme.primary};
  border: ${({ borderWidth, borderColor }) =>
    `${borderWidth || 2}px solid ${borderColor || "currentColor"}`};
  cursor: pointer;
`;

export default OutlinedButton;
