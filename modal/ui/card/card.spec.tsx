import React from "react";
import { render } from "@testing-library/react";
import { BasicCard } from "./card.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicCard closeModal={() => {}} />);
  const rendered = getByText("Please confirm");
  expect(rendered).toBeTruthy();
});
