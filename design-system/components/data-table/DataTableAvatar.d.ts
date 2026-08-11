import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "with photo" | "no photo";
  onGray?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const DataTableAvatar: React.FC<AvatarProps>;
export default DataTableAvatar;
