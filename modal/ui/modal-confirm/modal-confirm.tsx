import React from "react";

export type ModalConfirmProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function ModalConfirm({ text }: ModalConfirmProps): JSX.Element {
  return <div>{text}</div>;
}
