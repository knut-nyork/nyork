import * as React from 'react';
export type IconName =
  | "AbstractCheck"
  | "AbstractCircle"
  | "AbstractDotFilled"
  | "AbstractMinus"
  | "AbstractReload"
  | "ArrowsArrowDown"
  | "ArrowsArrowUp"
  | "ArrowsChevronRight"
  | "Icons24x24Bold"
  | "Icons24x24Box"
  | "Icons24x24Check"
  | "Icons24x24ChevronDown"
  | "Icons24x24ChevronRight"
  | "Icons24x24ChevronUp"
  | "Icons24x24ChevronsUpDown"
  | "Icons24x24Chrome"
  | "Icons24x24Circle"
  | "Icons24x24Cloud"
  | "Icons24x24Compass"
  | "Icons24x24CreditCard"
  | "Icons24x24Github"
  | "Icons24x24Keyboard"
  | "Icons24x24LifeBuoy"
  | "Icons24x24Loader"
  | "Icons24x24LogOut"
  | "Icons24x24Plus"
  | "Icons24x24Settings"
  | "Icons24x24Underline"
  | "Icons24x24User"
  | "Icons24x24UserPlus"
  | "Icons24x24Users"
  | "Icons24x24XCircle";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
