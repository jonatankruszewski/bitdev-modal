import React from "react";
import { Modal } from "./modal";

export const BasicModal = () => (
  <Modal
    // onCancel={() => alert("Canceled!")}
    onConfirm={() => alert("Acepted!")}
    //
    backDrop={false}
    text='hello from Modal'
    show={true}>
    <h1>Hi! I am a children </h1>
  </Modal>
);
