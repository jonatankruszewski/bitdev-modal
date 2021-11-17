import { BasicThemeUsage } from "./context-context.composition";
import { render } from "@testing-library/react";
import React from "react";

it("isOpen should be false", () => {
  const sentence = `The current value of isOpen is: false`;
  const { getByText } = render(<BasicThemeUsage />);
  const rendered = getByText(sentence);
  expect(rendered).toBeTruthy();
});
