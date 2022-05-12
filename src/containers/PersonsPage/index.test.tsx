import { render, screen } from "@testing-library/react";
import PersonPage from "./";

test("Renders page", () => {
  render(<PersonPage />);
  const headerElement = screen.getByText(
    /Sample Signoz React Instrumentation App/i
  );
  expect(headerElement).toBeInTheDocument();
});
