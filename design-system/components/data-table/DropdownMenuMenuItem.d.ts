import * as React from 'react';
export interface DropdownMenuMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "new york";
  type?: "standard" | "padding left" | "checkbox" | "radio";
  trailingVIsual?: React.ReactNode;
  label?: string;
  rIghtText?: string;
  leadingVisual?: React.ReactNode;
  trailingVIsual2?: boolean;
  rightText?: boolean;
  state?: "default" | "hover" | "selected" | "disabled" | "selected+isdisabled" | "selected+ishover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const DropdownMenuMenuItem: React.FC<DropdownMenuMenuItemProps>;
export default DropdownMenuMenuItem;
