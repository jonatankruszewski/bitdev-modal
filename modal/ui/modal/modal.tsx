import React, { ReactNode, useEffect, useState, useContext } from "react";
import styles from "./modal.module.scss";
import {
  ContextContext,
  ContextProvider,
  ContextContextType,
} from "@jonakru/modal.ui.context";
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
  show = true,
  backDrop = true,
  clickAway = true,
  children,
}: ModalProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(show);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <ContextContext.Provider
      value={{
        closeModal: closeModal,
        openModal: openModal,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
      }}>
      {isOpen && (
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
