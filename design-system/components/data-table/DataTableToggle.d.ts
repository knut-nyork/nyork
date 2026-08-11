import * as React from 'react';
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  style2?: "default" | "new york";
  iconNy?: React.ReactNode;
  iconDf?: React.ReactNode;
  type?: "outline" | "ghost";
  withText?: boolean;
  state?: "default" | "hover" | "active" | "disabled";
  labelText?: string;
  size?: "sm" | "md" | "lg";
}
export declare const DataTableToggle: React.FC<ToggleProps>;
export default DataTableToggle;
