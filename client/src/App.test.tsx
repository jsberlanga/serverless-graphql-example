import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("urql", () => ({
  useQuery: () => [{ data: { helloWorld: "hello world" } }],
}));

test("renders hello world", async () => {
  render(<App />);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
