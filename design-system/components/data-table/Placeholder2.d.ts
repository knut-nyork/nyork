import * as React from 'react';
export interface Placeholder2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Replace me". */
  text1?: string;
  /** Text content; defaults to "Choose an alternative component to replace this placeholder". */
  text2?: string;
}
export declare const Placeholder2: React.FC<Placeholder2Props>;
export default Placeholder2;
