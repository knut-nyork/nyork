import * as React from 'react';
export interface TableCellProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default - 65px" | "new york - 48px";
  state?: "default" | "hover";
  type?: "table item" | "table item medium" | "checkbox" | "actions" | "link button" | "icon + text" | "documentation" | "item + details" | "badge" | "input" | "radio" | "switch" | "picture" | "with avatar" | "progress";
  position?: "on left" | "on right";
  /** Text content; defaults to "Invoice". */
  text1?: string;
  /** Text content; defaults to "Details". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
