import * as React from 'react';
export interface DataTableFooterCaptionProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "A list of your recent invoices.". */
  text1?: string;
}
export declare const DataTableFooterCaption: React.FC<DataTableFooterCaptionProps>;
export default DataTableFooterCaption;
