import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "new york";
  type?: "default" | "secondary" | "destructive" | "outline";
  state?: "default" | "hover";
  /** Text content; defaults to "DataTableBadge". */
  text1?: string;
}
export declare const DataTableBadge: React.FC<BadgeProps>;
export default DataTableBadge;
