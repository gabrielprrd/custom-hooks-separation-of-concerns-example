import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./index";
import "@testing-library/jest-dom";

describe("ProgressBar component", () => {
  const { getByRole } = render(<ProgressBar />);
  const progressBar = getByRole("progressbar");

  it("renders with default props", () => {
    expect(progressBar).toBeInTheDocument;
  });

  it("renders with correct CSS classes", () => {
    expect(progressBar).toHaveClass("w-full");
    expect(progressBar).toHaveClass("[&::-webkit-progress-value]:rounded-r-lg");
    expect(progressBar).toHaveClass("[&::-webkit-progress-bar]:bg-transparent");
    expect(progressBar).toHaveClass(
      "[&::-webkit-progress-value]:bg-violet-400"
    );
    expect(progressBar).toHaveClass("[&::-moz-progress-bar]:transparent");
  });
});
