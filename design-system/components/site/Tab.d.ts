import * as React from 'react';
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "summer" | "winter";
  /** Text content; defaults to "Sommer". */
  text1?: string;
  /** Text content; defaults to "Vinter". */
  text2?: string;
}
export declare const Tab: React.FC<TabProps>;
export default Tab;
