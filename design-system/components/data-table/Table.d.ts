import * as React from 'react';
export interface TableProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "new york";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
export default Table;
