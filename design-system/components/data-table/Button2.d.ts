import * as React from 'react';
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  label?: string;
  style2?: "default" | "new york";
  iconOnly?: boolean;
  leadingVisual?: boolean;
  size?: "default" | "sm" | "lg";
  leadingVisual2?: React.ReactNode;
  trailingVisual?: React.ReactNode;
  state?: "default" | "loading" | "hover" | "disabled";
  trailingVisual2?: boolean;
  type?: "primary" | "secondary" | "outline" | "ghost" | "link" | "error";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Button2: React.FC<Button2Props>;
export default Button2;
