import React, { useEffect, useState } from "react";
import { Modal } from "@jonakru/modal.ui.modal";
import { Card } from "@jonakru/modal.ui.card";

export type ModalConfirmProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * a success callback attached to the confirm button.
   */
  onConfirm: Function;
  /**
   * a callback attached to the cancel button.
   */
  title: string;
  subTitle?: string;
  onCancel?: Function | undefined;
  children?: JSX.Element;
  toggleVisibility?: any;
};

export function ModalConfirm(): JSX.Element {
  return (
    <Modal backDrop={true} show={true} clickAway={true}>
      <Card
        text='Hello'
        title='Testing'
        subTitle='Something'
        onConfirm={() => alert("Success")}
        onCancel={() => alert("Canceled")}
      />
    </Modal>
  );
}
