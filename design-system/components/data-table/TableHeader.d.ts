import * as React from 'react';
export interface TableHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default (48px)" | "new york (40px)";
  type?: "title only" | "with filters" | "checkbox";
  state?: "default" | "hover";
  position?: "on left" | "on right";
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export default TableHeader;
