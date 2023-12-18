import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

// Describe and run the test
describe("NavBar Component", () => {
  it("the navbar gets rendered with available links", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });

  it("clicking a nav link redirects to the correct route", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
    );

    // Act
    fireEvent.click(screen.getByText("Cart"));

    // Assert
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
