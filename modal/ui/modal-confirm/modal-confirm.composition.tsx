import React from "react";
import { ModalConfirm } from "./modal-confirm";
import { Card } from "@jonakru/modal.ui.card";

export const BasicModalConfirm = () => (
  <ModalConfirm
    onCancel={() => alert("Cancel")}
    onConfirm={() => alert("Confirm")}>
    <Card title='Testing' subTitle='Some Subtitle' text='text'></Card>
  </ModalConfirm>
);
