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
    closeModal: jest.fn(function () {
      this.show = false
    }),
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
    closeModal: jest.fn(function () {
      this.show = false
    })
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
    closeModal: jest.fn()
  };
  const { queryByRole, rerender } = render(<Modal {...props} />);
  let xButton = queryByRole("button", { name: "✕" });
  userEvent.click(xButton);
  expect(props.closeModal).toHaveBeenCalledTimes(1);
  rerender(<Modal {...props} show={false} />)
  xButton = queryByRole("button", { name: "✕" });
  expect(xButton).toBeNull();
});

it("Should Close on click on the Background when clickAway is true", () => {
  const props = {
    backDrop: false,
    clickAway: true,
    show: true,
    closeModal: jest.fn()
  };
  const { queryByTestId, rerender } = render(<Modal {...props} />);
  let background = queryByTestId("modal-container");
  userEvent.click(background);
  expect(props.closeModal).toHaveBeenCalledTimes(1);
  rerender(<Modal {...props} show={false} />)
  background = queryByTestId("modal-container");
  expect(background).toBeNull();
});

it("Shouldn't Close on click on the Background when clickAway is false", () => {
  const props = {
    backDrop: false,
    clickAway: false,
    show: true,
    closeModal: jest.fn()
  };
  const { queryByTestId } = render(<Modal {...props} />);
  let background = queryByTestId("modal-container");
  userEvent.click(background);
  expect(props.closeModal).not.toHaveBeenCalled();
});
