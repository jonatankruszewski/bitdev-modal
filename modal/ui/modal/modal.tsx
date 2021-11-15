import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";

export type ModalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Modal({ text }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => {
    return (e: React.MouseEvent<HTMLInputElement>) => setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Open Modal</button>}
      {isOpen && <button onClick={() => setIsOpen(false)}>Close Modal</button>}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.card}>
            <span className={styles.close} onClick={toggleVisibility()}>
              X
            </span>
            <h2>Title</h2>
            <h4>Subtitle</h4>
            <p>{text}</p>
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        </div>
      )}
    </>
  );
}
