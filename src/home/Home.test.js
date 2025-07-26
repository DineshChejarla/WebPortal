import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("renders learn react link", () => {
  render(<Home />);
  // headOneElement Test Case
  const headOneElement = screen.getByText(/sai/i);
  expect(headOneElement).toBeInTheDocument();

  const imageTwo = screen.getByRole("img", { name: /my test Image2/i });
  expect(imageTwo).toHaveAttribute("src", "https://placehold.co/600x400");

  const imageOne = screen.getByAltText("My test Image1");
  expect(imageOne).toBeInTheDocument();
});
