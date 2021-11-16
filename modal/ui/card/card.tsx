import React from "react";
import { Button } from "@jonakru/modal.ui.button";
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
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * an optional callback attached to the cancel button.
   */
  onCancel?: Function | undefined;
  children?: JSX.Element;
  closeModal?: Function;
};

export function Card({
  text,
  title,
  subTitle,
  children,
  onCancel,
  onConfirm,
  closeModal,
}: CardProps): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      {subTitle && <h4>{subTitle}</h4>}
      <p>{text}</p>
      {children}
      <Button
        text='Cancel'
        importance='secondary'
        onClick={() => {
          if (typeof onCancel === "function") onCancel();
          if (typeof closeModal === "function") closeModal();
        }}
      />
      <Button
        onClick={() => {
          onConfirm();
          if (typeof closeModal === "function") closeModal();
        }}
        text='Confirm'
        importance='primary'
      />
    </div>
  );
}
