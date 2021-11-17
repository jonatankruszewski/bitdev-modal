import React from "react";
import { render } from "@testing-library/react";
import { BasicModalConfirm } from "./modal-confirm.composition";
import { ModalConfirm, ModalConfirmProps } from "./modal-confirm";
import userEvent from "@testing-library/user-event";

jest.mock("@jonakru/modal.ui.card", () => ({
  __esModule: true,
  default: "mockedDefaultExport",
  Card: () => <div>Mocked Child</div>,
}));

let props: ModalConfirmProps;

beforeEach(() => {
  props = {
    showCancel: true,
    backDrop: true,
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };
});

it("should render with the correct text", () => {
  const { getByText } = render(<BasicModalConfirm />);
  const rendered = getByText("Mocked Child");
  expect(rendered).toBeTruthy();
});

it("Renders a child", () => {
  const MockComponent = () => <div>Hello World</div>;
  const { getAllByText } = render(
    <ModalConfirm {...props}>
      <MockComponent />
    </ModalConfirm>
  );
  const rendered = getAllByText("Hello World");
  expect(rendered).toBeTruthy();
  expect(rendered).toHaveLength(1);
});

it("Should render Cancel button on showCancel = true", () => {
  const { queryByRole } = render(<ModalConfirm {...props} />);
  const cancelButton = queryByRole("button", { name: "Cancel" });
  expect(cancelButton).not.toBeNull();
});

it("Shouldn't render Cancel button on showCancel = false", () => {
  props.showCancel = false;
  const { queryByRole } = render(<ModalConfirm {...props} />);
  const cancelButton = queryByRole("button", { name: "Cancel" });
  expect(cancelButton).toBeNull();
  expect(props.onCancel).toHaveBeenCalledTimes(0);
});

it("Should launch onCancel when click on Cancel Button", () => {
  const { getByRole } = render(<ModalConfirm {...props} />);
  const cancelButton = getByRole("button", { name: "Cancel" });
  userEvent.click(cancelButton);
  expect(props.onCancel).toHaveBeenCalledTimes(1);
});

it("Should launch onConfirm when click on Confirm Button", () => {
  const { getByRole } = render(<ModalConfirm {...props} />);
  const confirmButton = getByRole("button", { name: "Confirm" });
  userEvent.click(confirmButton);
  expect(props.onConfirm).toHaveBeenCalledTimes(1);
});
