import * as React from 'react';
export interface FavikonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xl" | "l" | "m" | "s";
  color?: "brand" | "white";
}
export declare const Favikon: React.FC<FavikonProps>;
export default Favikon;
