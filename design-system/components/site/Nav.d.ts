import * as React from 'react';
export interface NavProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "desktop" | "mobile" | "variant3";
  /** Text content; defaults to "Hjem". */
  text1?: string;
  /** Text content; defaults to "Hytter". */
  text2?: string;
  /** Text content; defaults to "Tomter". */
  text3?: string;
  /** Text content; defaults to "Området". */
  text4?: string;
}
export declare const Nav: React.FC<NavProps>;
export default Nav;
