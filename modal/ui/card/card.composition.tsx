import React from "react";
import { Card } from "./card";

export const BasicCard = ({ closeModal }) => (
  <Card
    title='Please confirm'
    onConfirm={() => alert("Confirm!")}
    onCancel={() => alert("Cancel!")}
    text='Is 6 multiplied by 7 equal to 42?'
    closeModal={closeModal}>
    <div>More text!</div>
  </Card>
);
