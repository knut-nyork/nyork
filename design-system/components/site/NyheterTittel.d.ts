import * as React from 'react';
export interface NyheterTittelProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Tittel her om hva vi skriver om, det vet ikke jeg.". */
  text1?: string;
}
export declare const NyheterTittel: React.FC<NyheterTittelProps>;
export default NyheterTittel;
