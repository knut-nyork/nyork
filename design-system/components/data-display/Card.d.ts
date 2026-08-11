import * as React from 'react';
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "left" | "right";
  /** Text content; defaults to "1 innflytningsklar  arkitetegnet hytte til salgs". */
  text1?: string;
  /** Text content; defaults to "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.". */
  text2?: string;
}
export declare const Card: React.FC<CardProps>;
export default Card;
