import React from "react";

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Card({ text }: CardProps): JSX.Element {
  return <div>{text}</div>;
}
