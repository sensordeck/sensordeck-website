import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function SmokeTest() {
  return <p>Test framework is ready</p>;
}

describe("test setup", () => {
  it("renders a React component", () => {
    render(<SmokeTest />);

    expect(screen.getByText("Test framework is ready")).toBeInTheDocument();
  });
});
