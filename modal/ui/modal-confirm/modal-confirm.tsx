import React, { useEffect, useState } from "react";
import { Card } from "@jonakru/modal.ui.card";
import { Button } from "@jonakru/modal.ui.button";

export type ModalConfirmProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * a callback attached to the cancel button.
   */

  onCancel?: Function | undefined;
  children?: JSX.Element;
};

export function ModalConfirm({
  text,
  onCancel,
  onConfirm,
  children,
}: ModalConfirmProps): JSX.Element {
  return (
    <div>
      <h2>Title</h2>
      <h4>Subtitle</h4>
      <p>{text}</p>
      <Button
        text='Cancel'
        importance='secondary'
        onClick={() => {
          if (typeof onCancel === "function") onCancel();
          setIsOpen(false);
        }}
      />
      <Button
        onClick={() => {
          onConfirm();
          setIsOpen(false);
        }}
        text='Confirm'
        importance='primary'
      />
      {children}
      <Card text='Hello world mothefucke'></Card>
    </div>
  );
}
