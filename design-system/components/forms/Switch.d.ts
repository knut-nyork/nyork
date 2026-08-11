import * as React from 'react';
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  showLabel?: boolean;
  style2?: "default" | "new york";
  label?: string;
  state?: "active" | "inactive";
  labelPosition?: "on right" | "on left";
  disabled?: boolean;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
