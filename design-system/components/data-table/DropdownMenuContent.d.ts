import * as React from 'react';
export interface DropdownMenuContentProps {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  style2?: "default" | "new york" | "select";
  leadingVisual?: React.ReactNode;
  type?: "checkbox" | "default" | "radio" | "profile" | "breadcrumbs" | "frameworks" | "table filters" | "select menu";
  label?: boolean;
  leadingVisual2?: boolean;
}
export declare const DropdownMenuContent: React.FC<DropdownMenuContentProps>;
export default DropdownMenuContent;
