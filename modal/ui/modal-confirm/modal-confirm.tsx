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
   * Enables / disables the cancel button.
   * Default: true
   */
  showCancel?: boolean;
  children?: ReactNode;
};

export function ModalConfirm({
  children,
  onCancel,
  onConfirm,
  backDrop = true,
  show = true,
  clickAway = true,
  showCancel = true,
}: ModalConfirmProps): JSX.Element {
  return (
    <Modal backDrop={backDrop} show={show} clickAway={clickAway}>
      <ContextContext.Consumer>
        {({ closeModal }) => (
          <>
            {children}
            <div className={styles.wrapper}>
              {showCancel && (
                <Button
                  text='Cancel'
                  importance='secondary'
                  onClick={() => {
                    if (typeof onCancel === "function") onCancel();
                    closeModal();
                  }}
                />
              )}
              <Button
                onClick={() => {
                  onConfirm();
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
