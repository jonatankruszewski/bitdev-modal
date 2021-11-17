import React from "react";
export type CardProps = {
  /**
   * The paragraph content of the card.
   */
  text: string;
  /**
   * The card title.
   */
  title: string;
  /**
   * The card subtitle.
   */
  subTitle?: string;
  children?: JSX.Element;
};

export function Card({
  text,
  title,
  subTitle,
  children,
}: CardProps): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      {subTitle && <h4>{subTitle}</h4>}
      <p>{text}</p>
      {children}
    </div>
  );
}
