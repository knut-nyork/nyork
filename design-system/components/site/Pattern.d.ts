import * as React from 'react';
export interface PatternProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6";
}
export declare const Pattern: React.FC<PatternProps>;
export default Pattern;
