import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";

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
  const [isOpen, setIsOpen] = useState(show);

  const toggleVisibility = () => {
    return (e: React.MouseEvent<HTMLInputElement>) => setIsOpen(!isOpen);
  };

  if (!isOpen) return null;

  return (
    <div
      data-backdrop={backDrop}
      data-testid='modal-container'
      className={styles.modal}
      onClick={() => clickAway && setIsOpen(false)}>
      <div
        onClick={e => e.stopPropagation()}
        data-backdrop={backDrop}
        className={styles.card}>
        <button
          className={styles.close}
          data-testid='x-button'
          role="button"
          onClick={toggleVisibility()}>
          ✕
        </button>
        {children &&
          React.cloneElement(children, {
            closeModal: () => setIsOpen(false),
          })}
      </div>
    </div>
  );
}
