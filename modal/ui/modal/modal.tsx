import React, { ReactNode } from "react";
import styles from "./modal.module.scss";
import { ContextContext, ContextProvider } from "@jonakru/modal.ui.context";
export type ModalProps = {
  /**
   * shows / hides the modal.
   * Default: true
   */
  show?: boolean;
  /**
   * A faded black background to highlight the modal.
   * Default: true
   */
  backDrop?: boolean;
  /**
   * Enables / disables the behaviour of closing the modal by clicking outside of it.
   * Default: true
   */
  clickAway?: boolean;
  /**
   * Children elements to be rendered inside
   */
  children?: ReactNode;
};

export function Modal({
  backDrop = true,
  clickAway = true,
  show = true,
  children,
}: ModalProps): JSX.Element | null {
  return (
    <ContextProvider show={show}>
      <ContextContext.Consumer>
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
      </ContextContext.Consumer>
    </ContextProvider>
  );
}
