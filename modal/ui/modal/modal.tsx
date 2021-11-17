import React, { useEffect, useState, useContext } from "react";
import styles from "./modal.module.scss";
import { ModalContextProvider } from "@jonakru/modal.modal-context/modal-context-provider";
import { ModalContext } from "@jonakru/modal.modal-context/modal-context";

export type ModalProps = {
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
   * Children elements to be rendered inside
   */
  children?: JSX.Element;
  /**
   * Enables / disables the behaviour of closing the modal by clicking outside of it.
   */
  clickAway?: boolean;
};

export function Modal({
  backDrop = true,
  show = false,
  clickAway = true,
  children,
}: ModalProps): JSX.Element | null {
  // const { isOpen, setIsOpen } = useContext(ModalContext);
  // useEffect(() => setIsOpen(show), []);

  // if (!isOpen) return null;
  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <div
          data-backdrop={backDrop}
          data-testid='modal-container'
          className={styles.modal}
          onClick={() => clickAway && closeModal()}>
          <div
            onClick={e => e.stopPropagation()}
            data-backdrop={backDrop}
            className={styles.card}>
            <button
              className={styles.close}
              data-testid='x-button'
              role='button'
              onClick={() => closeModal()}>
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
}
