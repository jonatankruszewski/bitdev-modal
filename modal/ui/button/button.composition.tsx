import React from "react";
import { Button } from "./button";

export const PrimaryButton = () => (
  <Button
    importance='primary'
    text='hello from Button'
    clickCallback={() => {
      alert("Hello from button");
    }}
  />
);

export const SecondaryButton = () => (
  <Button importance='secondary' text='hello from Button' />
);
