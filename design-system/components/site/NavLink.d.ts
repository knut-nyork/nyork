import * as React from 'react';
export interface NavLinkProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Text content; defaults to "Hjem". */
  text1?: string;
}
export declare const NavLink: React.FC<NavLinkProps>;
export default NavLink;
