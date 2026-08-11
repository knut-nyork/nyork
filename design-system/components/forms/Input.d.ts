import * as React from 'react';
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  comment?: boolean;
  style2?: "default" | "new york";
  validationMessage?: boolean;
  caption?: boolean;
  leadingVisual?: React.ReactNode;
  trailingAction?: boolean;
  state?: "default" | "active" | "filled" | "error" | "disabled";
  placeholder?: string;
  leadingVisual2?: boolean;
}
export declare const Input: React.FC<InputProps>;
export default Input;
