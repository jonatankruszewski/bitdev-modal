import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import { Card } from "@jonakru/modal.ui.card";

export type ModalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  onConfirm: Function;

  show?: boolean;
  backDrop?: boolean;
  onCancel?: Function | undefined;
};

export function Modal({
  backDrop = true,
  show = false,
  text,
  onConfirm,
  onCancel,
}: ModalProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(show);
  const toggleVisibility = () => {
    return (e: React.MouseEvent<HTMLInputElement>) => setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          data-backDrop={backDrop}
          className={styles.modal}
          onClick={toggleVisibility()}>
          <div data-backDrop={backDrop} className={styles.card}>
            <span className={styles.close} onClick={toggleVisibility()}>
              X
            </span>
            <h2>Title</h2>
            <h4>Subtitle</h4>
            <p>{text}</p>
            <button
              onClick={() => {
                if (typeof onCancel === "function") onCancel();
                setIsOpen(false);
              }}>
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                setIsOpen(false);
              }}>
              Confirm
            </button>
            <Card text='Hello world mothefucke'></Card>
          </div>
        </div>
      )}
    </>
  );
}
