import * as React from 'react';
export interface DropdownMenuSectionTitleProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  size?: "lg" | "sm";
  paddingLeft?: boolean;
  muted?: boolean;
}
export declare const DropdownMenuSectionTitle: React.FC<DropdownMenuSectionTitleProps>;
export default DropdownMenuSectionTitle;
