import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";

describe("Counter Component", () => {
  test("should render initial count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });
  test('should increment the counter on "increment" button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('should decrement the counter on "Decrement" button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Decrement/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText(/Counter: -1/i);
    expect(counterElement).toBeInTheDocument();
  });
});
