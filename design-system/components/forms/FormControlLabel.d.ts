import * as React from 'react';
export interface FormControlLabelProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  disabled?: boolean;
  text?: string;
  /** Text content; defaults to "*". */
  text1?: string;
}
export declare const FormControlLabel: React.FC<FormControlLabelProps>;
export default FormControlLabel;
