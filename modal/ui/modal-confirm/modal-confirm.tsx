import React, { useEffect, useState, useContext } from "react";
import { Modal } from "@jonakru/modal.ui.modal";
import { Card } from "@jonakru/modal.ui.card";
import { Button } from "@jonakru/modal.ui.button";
import { ContextContext } from "@jonakru/modal.ui.context";

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
  const contextito = useContext(ContextContext);
  const onConfirmButton = () => {
    if (typeof onCancel === "function") onConfirm();
    alert(JSON.stringify(contextito));
    // closeModal();
  };

  const onCancelButton = () => {};

  useEffect(() => {
    setTimeout(() => console.log(contextito), 300);
  }, []);

  return (
    // <div>Hello</div>
    <Modal backDrop={true} show={true} clickAway={true}>
      <ContextContext.Consumer>
        {({ closeModal }) => (
          <>
            {children}
            <Button
              text='Cancel'
              importance='secondary'
              onClick={() => {
                if (typeof onCancel === "function") onCancel();
                closeModal();
              }}
            />
            <Button
              onClick={() => {
                if (typeof onConfirm === "function") onConfirm();
                closeModal();
              }}
              text='Confirm'
              importance='primary'
            />
          </>
        )}
      </ContextContext.Consumer>
    </Modal>
  );
}
