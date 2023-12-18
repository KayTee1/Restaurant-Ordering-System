import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Menu from "../pages/Menu";

describe("On the Menu page", () => {
  it("renders the page", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Menu />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

});
