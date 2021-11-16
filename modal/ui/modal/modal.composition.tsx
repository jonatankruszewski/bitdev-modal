import React from "react";
import { Modal } from "./modal";

export const BasicModal = () => (
  <Modal backDrop={false} show={true}>
    <h1>Hi! I am a children </h1>
  </Modal>
);
