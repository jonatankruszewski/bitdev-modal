import React from "react";
import { Modal } from "./modal";

export const EmptyModal = () => (
  <Modal backDrop={true} show={true}>
    <h1>Hello from modal</h1>
  </Modal>
);
