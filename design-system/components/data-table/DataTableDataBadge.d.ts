import * as React from 'react';
export interface DataBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  /** Text content; defaults to "Documentation". */
  text1?: string;
}
export declare const DataTableDataBadge: React.FC<DataBadgeProps>;
export default DataTableDataBadge;
