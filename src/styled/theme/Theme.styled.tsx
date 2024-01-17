/**
 * Theme Component
 *
 * A reusable component for applying themed styling to your React application.
 * It utilizes styled-components for styling and supports both light and dark themes.
 *
 * @component
 *
 * @param {ReactNode} child - The content to be wrapped with the themed styling.
 * @param {Color} primaryColor - The primary color for the theme. Default is an ocean blue color.
 * @param {Color} secondaryColor - The secondary color for the theme.
 * @param {Color} bgColor - The background color for the theme.
 * @param {"dark" | "light"} themeType - The type of theme, either "dark" or "light".
 *
 * @example
 * // Basic usage
 * <Theme themeType="light" child={<App />}>
 * </Theme>
 *
 * @example
 * // Customizing theme colors
 * <Theme
 *   themeType="dark"
 *   primaryColor="#ff5733" // Custom primary color
 *   secondaryColor="#2c3e50" // Custom secondary color
 *   bgColor="#1a1a1a" // Custom background color
 *  child={
 *    <App />
 *  }
 * />
 *   
 * 
 *
 * @example
 * // Using default dark theme
 * <Theme themeType="dark" child={<App />}>
 * 
 */
import React, { ReactNode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Color } from "types/Color";

interface ThemeProps {
  child: ReactNode;
  primaryColor?: Color;
  secondaryColor?: Color;
  bgColor?: Color;
  themeType: "dark" | "light";
  defaultRadius?: number; 
}

const defaultColors = {
  primary: "#00b4cc",
  secondary: "#8f8f8f",
  darkBg: "#1f1f1f",
  lightBg: "#f4f4f4",
  textDark: "#fff",
  textLight: "#000",
};

const GlobalStyles = createGlobalStyle<{ bgColor: string }>`
  body {
    background-color: ${({ bgColor }) => bgColor};
    transition: background-color 0.3s ease;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Theme: React.FC<ThemeProps> = ({
  child,
  primaryColor = defaultColors.primary,
  secondaryColor,
  bgColor,
  themeType,
  defaultRadius = 10, 
}) => {
  const theme = {
    dark: {
      primary: primaryColor,
      secondary: secondaryColor || defaultColors.secondary,
      bg: bgColor || defaultColors.darkBg,
      text: defaultColors.textDark,
      radius: defaultRadius,
    },
    light: {
      primary: primaryColor,
      secondary: secondaryColor || defaultColors.secondary,
      bg: bgColor || defaultColors.lightBg,
      text: defaultColors.textLight,
      radius: defaultRadius,
    },
  };

  return (
    <ThemeProvider theme={theme[themeType]}>
      <>
        <GlobalStyles bgColor={theme[themeType].bg} />
        {child}
      </>
    </ThemeProvider>
  );
};

export default Theme;
