import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";

export type ModalInnerProps = {
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
  closeModal: Function;
};

export function ModalInner({
  backDrop = true,
  children,
  closeModal,
}: ModalInnerProps): JSX.Element | null {

    const onConfirmButton = () => {
      onConfirm();
      if (typeof closeModal === "function") closeModal();
    };

    const onCancelButton = () => {
      if (typeof onCancel === "function") onCancel();
      if (typeof closeModal === "function") closeModal();
    };

  
  return (
     <>
        {children}
        <Button text='Cancel' importance='secondary' onClick={onCancelButton} />
        <Button onClick={onConfirmButton} text='Confirm' importance='primary' />
      </>
  );
}
