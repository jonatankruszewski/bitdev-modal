import { BasicThemeUsage } from "./context-context.composition";
import { render } from "@testing-library/react";
import React from "react";

it("should render the button in the color blue", () => {
  const sentence = `The current value of isOpen is: true`;
  const { getByText } = render(<BasicThemeUsage />);
  const rendered = getByText(sentence);
  expect(rendered).toBeTruthy();
});
