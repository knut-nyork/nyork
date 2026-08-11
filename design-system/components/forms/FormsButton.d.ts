import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  type?: "primary" | "secondary" | "ghost" | "inreverse";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text2?: boolean;
  state?: "default" | "hover" | "disabled";
  iconRight2?: boolean;
  iconLeft2?: boolean;
}
export declare const FormsButton: React.FC<ButtonProps>;
export default FormsButton;
