// Colors.ts
import * as colorsJson from "./res/colors.json";

export type ValidColorName = keyof typeof colorsJson;

export type Color = ValidColorName | string;

export function isValidColor(color: string): color is Color {
  return (
    typeof color === "string" &&
    (color in colorsJson ||
      /^#[0-9A-Fa-f]{6}$/.test(color) ||
      /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color))
  );
}
