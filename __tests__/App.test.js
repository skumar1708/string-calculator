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
  
  test("calculates sum correctly", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");
  
    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);
  
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
  
  test("displays error for negative numbers", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");
  
    fireEvent.change(input, { target: { value: "-1,2,-3" } });
    fireEvent.click(button);
  
    expect(screen.getByText("negative numbers not allowed -1,-3")).toBeInTheDocument();
  });
});


