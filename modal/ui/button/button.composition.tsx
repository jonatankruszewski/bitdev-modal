import React from "react";
import { Button } from "./button";

export const PrimaryButton = ({
  cb = () => alert("clicked!"),
  text = "Hello from Primary",
}) => <Button importance='primary' text={text} onClick={cb} />;

export const SecondaryButton = ({
  cb = () => alert("clicked!"),
  text = "Hello from Secondary",
}) => <Button importance='secondary' text={text} onClick={cb} />;
