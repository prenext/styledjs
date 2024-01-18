import styled from "styled-components";

/**
 * Center component represents a container that flexibly centers its child elements.
 *
 * @param {string} height - The height of the container.
 * @param {string} width - The width of the container.
 * @param {string} direction - The flex direction of the container (e.g., 'row' or 'column').
 * @param {boolean} space - Whether to apply space-evenly distribution.
 *
 * Usage example:
 *
 * ```jsx
 * <Center height="300px" width="200px" direction="row" space>
 *   <div>
 *     <h1>This content is centered!</h1>
 *     <p>Some additional text.</p>
 *   </div>
 * </Center>
 * ```
 */

interface CenterProps {
  height?: string;
  width?: string;
  direction?: string;
  space?: boolean;
}

const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: ${({ space, direction }) =>
    (space && direction === "column") || (space && !direction)
      ? "space-evenly"
      : "center"};
  align-items: ${({ space, direction }) =>
    space && direction === "row" ? "space-evenly" : "center"};
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => (height ? `${height}` : "auto")};
  width: ${({ width }) => (width ? `${width}` : "auto")};
`;

export default Center;
