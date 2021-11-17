import React from "react";
import { Modal } from "./modal";

export const ExampleModal = () => (
  <Modal backDrop={true} clickAway={false} show={true}>
    <h1>Hello from modal</h1>
  </Modal>
);
