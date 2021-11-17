import React, { ReactNode, useState, useEffect } from "react";
import styles from "./modal.module.scss";
import { ContextContext } from "@jonakru/modal.ui.context";
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
   * Callback to hide the modal
   */
  closeModal: Function;
  /**
   * Children elements to be rendered inside
   */
  children?: ReactNode;
};

export function Modal({
  show = true,
  backDrop = true,
  clickAway = true,
  closeModal,
  children,
}: ModalProps): JSX.Element | null {
  return (
    <ContextContext.Provider
      value={{
        closeModal: closeModal,
        isOpen: show,
      }}>
      {show && (
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
    </ContextContext.Provider>
  );
}
