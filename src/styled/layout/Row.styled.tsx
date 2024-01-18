import styled from "styled-components";

/**
 * Row component represents a container with a horizontal flex container layout.
 *
 * @param {string} height - The height of the container.
 * @param {string} width - The width of the container.
 * @param {string} mainAlign - The main-axis alignment for child elements (e.g., 'flex-start', 'flex-end', 'space-between').
 * @param {string} crossAlign - The cross-axis alignment for child elements (e.g., 'center', 'flex-start', 'flex-end').
 * @param {boolean} wrap - Whether to allow content to wrap onto multiple lines.
 *
 * Usage example:
 *
 * ```jsx
 * <Row height="300px" width="200px" mainAlign="space-between" crossAlign="center" wrap>
 *   <div>
 *     <h1>This content is in a customized Row!</h1>
 *     <p>Some additional text.</p>
 *   </div>
 * </Row>
 * ```
 */

interface RowProps {
  height?: string;
  width?: string;
  mainAlign?: string;
  crossAlign?: string;
  wrap?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ mainAlign }) => mainAlign || "space-around"};
  align-items: ${({ crossAlign }) => crossAlign || "center"};
  align-content: space-around;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;

export default Row;
