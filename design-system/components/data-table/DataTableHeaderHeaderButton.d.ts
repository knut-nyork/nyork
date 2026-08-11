import * as React from 'react';
export interface DataTableHeaderHeaderButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  style2?: "default - 40px" | "new york - 36px";
  showMenu?: boolean;
  state?: "default" | "hover";
  icon?: React.ReactNode;
  iconRight?: boolean;
}
export declare const DataTableHeaderHeaderButton: React.FC<DataTableHeaderHeaderButtonProps>;
export default DataTableHeaderHeaderButton;
