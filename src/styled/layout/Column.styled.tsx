import styled from "styled-components";

/**
 * Column component represents a container with a vertical flex container layout.
 *
 * @param {string} height - The height of the container.
 * @param {string} width - The width of the container.
 * @param {string} mainAlign - The main-axis alignment for child elements (e.g., 'flex-start', 'flex-end', 'space-between').
 * @param {string} crossAlign - The cross-axis alignment for child elements (e.g., 'center', 'flex-start', 'flex-end').
 *
 * Usage example:
 *
 * ```jsx
 * <Column height="300px" width="200px" mainAlign="space-between" crossAlign="center">
 *   <div>
 *     <h1>This content is in a customized Column!</h1>
 *     <p>Some additional text.</p>
 *   </div>
 * </Column>
 * ```
 */

interface ColumnProps {
  height?: string;
  width?: string;
  mainAlign?: string;
  crossAlign?: string;
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ mainAlign }) => mainAlign || "space-around"};
  align-items: ${({ crossAlign }) => crossAlign || "center"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
`;

export default Column;
