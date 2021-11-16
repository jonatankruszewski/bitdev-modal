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
  children?: JSX.Element;
  clickAway?: boolean;
};

export function Modal({
  backDrop = true,
  show = false,
  clickAway = false,
  children,
}: ModalProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(show);

  const toggleVisibility = () => {
    return (e: React.MouseEvent<HTMLInputElement>) => setIsOpen(!isOpen);
  };

  if (!isOpen) return null;

  return (
    <div
      data-backDrop={backDrop}
      className={styles.modal}
      onClick={() => {
        if (clickAway) setIsOpen(false);
      }}>
      <div
        onClick={e => e.stopPropagation()}
        data-backDrop={backDrop}
        className={styles.card}>
        <span className={styles.close} onClick={toggleVisibility()}>
          ✕
        </span>
        {children}
      </div>
    </div>
  );
}
