import * as React from 'react';
export interface HeckboxProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  caption?: boolean;
  captionText?: string;
  style2?: "default" | "new york";
  type?: "checkbox only" | "with label" | "label + caption";
  disabled?: boolean;
  labelText?: string;
  state?: "empty" | "indeterminate" | "filled";
  /** Text content; defaults to "*". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const FormsHeckbox: React.FC<HeckboxProps>;
export default FormsHeckbox;
