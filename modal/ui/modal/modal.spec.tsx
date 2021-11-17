import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./index";

it("Should render a child", () => {
  const MockComponent = () => <div>Hello World</div>;
  const props = {
    backDrop: false,
    clickAway: true,
    show: true,
    children: MockComponent() as unknown as ReactNode,
  };
  const { getAllByText } = render(<Modal {...props} />);
  const rendered = getAllByText("Hello World");
  expect(rendered).toBeTruthy();
  expect(rendered).toHaveLength(1);
});

it("Shouldn't be on screen when show is false", () => {
  const props = {
    backDrop: false,
    clickAway: true,
    show: false,
  };
  const { queryByTestId } = render(<Modal {...props} />);
  const rendered = queryByTestId("modal-container");
  expect(rendered).toBeNull();
});

it("Should Close on click on the X", () => {
  const props = {
    backDrop: false,
    clickAway: true,
    show: true,
  };
  const { queryByRole } = render(<Modal {...props} />);
  let xButton = queryByRole("button", { name: "✕" });
  userEvent.click(xButton);
  xButton = queryByRole("button", { name: "✕" });
  expect(xButton).toBeNull();
});

it("Should Close on click on the Background when clickAway is true", () => {
  const props = {
    backDrop: false,
    clickAway: true,
    show: true,
  };
  const { queryByTestId } = render(<Modal {...props} />);
  let background = queryByTestId("modal-container");
  userEvent.click(background);
  background = queryByTestId("modal-container");
  expect(background).toBeNull();
});

it("Shouldn't Close on click on the Background when clickAway is false", () => {
  const props = {
    backDrop: false,
    clickAway: false,
    show: true,
  };
  const { queryByTestId } = render(<Modal {...props} />);
  let background = queryByTestId("modal-container");
  userEvent.click(background);
  background = queryByTestId("modal-container");
  expect(background).not.toBeNull();
});
