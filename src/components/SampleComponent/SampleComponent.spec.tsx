import React from "react";
import { render, screen } from "@testing-library/react";
import SampleComponent from "./SampleComponent";
import { SampleComponentProps } from "./SampleComponent.types";
import "@testing-library/jest-dom";

describe("SampleComponent", () => {
  let props: SampleComponentProps;

  beforeEach(() => {
    props = {
      text: "Hello, world!",
    };
  });

  it("renders the component with the correct text", () => {
    render(<SampleComponent {...props} />);

    const textElement = screen.getByTestId("sample-text");
    expect(textElement).toHaveTextContent(props.text);
  });
});
