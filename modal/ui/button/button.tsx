import { type } from "os";
import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * sets primary / secondary color
   */
  importance?: "primary" | "secondary";
  /**
   * A callback to be called on click
   */
  onClick?: Function | undefined;
};

export function Button({ text, importance, onClick }: ButtonProps) {
  return (
    <button
      onClick={() => {
        if (typeof onClick === "function") {
          onClick();
        }
      }}
      data-testid='button'
      data-variation={importance || "primary"}
      className={styles.button}>
      {text}
    </button>
  );
}
