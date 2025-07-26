import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Weather from "../weather/Weather";

test("renders learn react link", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </MemoryRouter>
  );

  const headTwoElement = screen.getByText(/Ecommerce/i);
  expect(headTwoElement).toBeInTheDocument();
});
