// App.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("React Router", () => {
  test('renders Home page on default route "/"', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test('renders About page on route "/weather"', () => {
    render(
      <MemoryRouter initialEntries={["/weather"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Weather Page")).toBeInTheDocument();
  });
});
