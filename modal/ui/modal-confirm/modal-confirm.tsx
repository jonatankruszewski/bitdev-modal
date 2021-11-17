import React, { useEffect, useState, useContext } from "react";
import { Modal } from "@jonakru/modal.ui.modal";
import { Card } from "@jonakru/modal.ui.card";
import { Button } from "@jonakru/modal.ui.button";
import { ModalContext } from "@jonakru/modal.modal-context/modal-context";
export type ModalConfirmProps = {
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * an optional callback attached to the cancel button.
   */
  onCancel?: Function | undefined;
  closeModal?: Function;
  children?: JSX.Element;
};

export function ModalConfirm({ children, onCancel, onConfirm }): JSX.Element {
  const { isOpen, closeModal } = useContext(ModalContext);
  const onConfirmButton = () => {
    if (typeof onCancel === "function") onConfirm();
    closeModal();
  };

  const onCancelButton = () => {
    if (typeof onCancel === "function") onCancel();
    closeModal();
  };

  return (
    <Modal backDrop={true} show={true} clickAway={true}>
      <>
        {children}
        <Button text='Cancel' importance='secondary' onClick={onCancelButton} />
        <Button onClick={onConfirmButton} text='Confirm' importance='primary' />
      </>
    </Modal>
  );
}
