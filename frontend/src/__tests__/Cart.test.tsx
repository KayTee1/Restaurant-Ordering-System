import { describe, it, expect } from "vitest";
import Cart from "../pages/Cart";
import { MemoryRouter } from "react-router-dom";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();

const defaultComponent = (
  <MemoryRouter initialEntries={["/"]}>
    <Cart />
  </MemoryRouter>
);

describe("On the Cart page", async () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
