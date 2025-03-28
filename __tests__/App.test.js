import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../src/App";
import { add } from "../src/utils/stringCalculator";

describe("String Calculator test case", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});

describe("String calculator UI test cases", () => {
  test("renders input field and button", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter numbers")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });
});


