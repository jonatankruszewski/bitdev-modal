import React, { useState } from "react";
import { ModalConfirm } from "./modal-confirm";
import { Card } from "@jonakru/modal.ui.card";

export const BasicModalConfirm = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <ModalConfirm
    show={isOpen}
    closeModal={() => { setIsOpen(false) }}
    onCancel={() => alert("Cancel")}
    onConfirm={() => alert("Confirm")}>
    <div>Hello I am a child</div>
  </ModalConfirm>
};
