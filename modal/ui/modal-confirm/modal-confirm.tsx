import React, { ReactNode } from "react";
import { Modal } from "@jonakru/modal.ui.modal";
import { Button } from "@jonakru/modal.ui.button";
import { ContextContext } from "@jonakru/modal.ui.context";
import styles from "./modal-confirm.module.scss";
export type ModalConfirmProps = {
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * an optional callback attached to the cancel button.
   */
  onCancel?: Function | undefined;
  children?: ReactNode;
};

export function ModalConfirm({ children, onCancel, onConfirm }): JSX.Element {
  return (
    <Modal backDrop={true} show={true} clickAway={true}>
      <ContextContext.Consumer>
        {({ closeModal }) => (
          <>
            {children}
            <div className={styles.wrapper}>
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
            </div>
          </>
        )}
      </ContextContext.Consumer>
    </Modal>
  );
}
