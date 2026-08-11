import * as React from 'react';
export interface IconSlotPlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IconSlotPlaceholder: React.FC<IconSlotPlaceholderProps>;
export default IconSlotPlaceholder;
