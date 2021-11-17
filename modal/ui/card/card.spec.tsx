import React from "react";
import { render } from "@testing-library/react";
import { ExampleCard } from "./card.composition";
import { Card } from "./card";

it("Should render with the correct text", () => {
  const { getByText } = render(<ExampleCard />);
  const title = getByText("Please confirm");
  expect(title).toBeTruthy();
  const equationText = "Is 6 multiplied by 7 equal to 42?";
  const equation = getByText(equationText);
  expect(equation).toBeTruthy();
  const childDiv = getByText("More text!");
  expect(childDiv).toBeTruthy();
});

it("Should render with the correct text upon passing it on props", () => {
  const props = {
    title: "React is Awesome",
    subTitle: "Also TypeScript",
    text: "Hello World",
  };
  const { getByText } = render(<Card {...props} />);
  const title = getByText(props.title);
  expect(title).toBeTruthy();
  const subTitle = getByText(props.subTitle);
  expect(subTitle).toBeTruthy();
  const text = getByText(props.text);
  expect(text).toBeTruthy();
});
