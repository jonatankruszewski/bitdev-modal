import React, { useState } from "react";
import { Modal } from "./modal";

export const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <Modal closeModal={() => setIsOpen(false)}
    backDrop={true}
    clickAway={false}
    show={isOpen}>
    <h1>Hello from modal</h1>
  </Modal>
}
