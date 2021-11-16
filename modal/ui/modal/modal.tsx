import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import { Card } from "@jonakru/modal.ui.card";
import { Button } from "@jonakru/modal.ui.button";

export type ModalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * shows / hides the modal.
   * Default: false
   */
  show?: boolean;
  /**
   * A faded black background to highlight the modal.
   * Default: true
   */
  backDrop?: boolean;
  /**
   * a callback attached to the cancel button.
   */
  onCancel?: Function | undefined;
  children?: JSX.Element;
};

export function Modal({
  backDrop = true,
  show = false,
  text,
  onConfirm,
  onCancel,
  children,
}: ModalProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(show);
  const toggleVisibility = () => {
    return (e: React.MouseEvent<HTMLInputElement>) => setIsOpen(!isOpen);
  };

  if (!isOpen) return null;
  return (
    <>
      <div
        data-backDrop={backDrop}
        className={styles.modal}
        onClick={toggleVisibility()}>
        <div
          onClick={e => e.stopPropagation()}
          data-backDrop={backDrop}
          className={styles.card}>
          <span className={styles.close} onClick={toggleVisibility()}>
            X
          </span>
          <h2>Title</h2>
          <h4>Subtitle</h4>
          <p>{text}</p>
          <Button
            text='Cancel'
            importance='primary'
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
      </div>
    </>
  );
}
