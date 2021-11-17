import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PrimaryButton } from "./button.composition";
import { Button, ButtonProps } from "./index";

it("Should render with the correct text", () => {
  const text = "Un, dos, tres, un pasito para adelante María";
  const { getByText } = render(<PrimaryButton text={text} />);
  const rendered = getByText(text);
  expect(rendered).toBeTruthy();
});

test("Should call callback on click", () => {
  const props: ButtonProps = {
    importance: "primary",
    onClick: jest.fn(),
    text: "Something to render",
  };
  const { getByText } = render(<Button {...props} />);
  const rendered = getByText(props.text);
  expect(rendered).toBeTruthy();
  userEvent.click(rendered);
  expect(props.onClick).toHaveBeenCalledTimes(1);
});

test("Should Render with the 'button' className", () => {
  const props: ButtonProps = {
    importance: "primary",
    onClick: jest.fn(function () {}),
    text: "Something to render",
  };
  const { getByText } = render(<Button {...props} />);
  const rendered = getByText(props.text);
  expect(rendered).toHaveClass("button");
});
