import * as React from 'react';
export interface DropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  scrollUp?: boolean;
  style2?: "default" | "new york";
  scrollDown?: boolean;
  divider?: boolean;
  showHeader?: boolean;
  dropdownContent?: React.ReactNode;
  dropdownContent2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export default DropdownMenu;
