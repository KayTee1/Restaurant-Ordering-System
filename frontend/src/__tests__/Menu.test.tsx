import { expect, it, describe } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { createRenderer } from "react-test-renderer/shallow";

import Menu from "../pages/Menu";

const renderer = createRenderer();

const defaultComponent = (
  <MemoryRouter initialEntries={["/"]}>
    <Menu />
  </MemoryRouter>
);

// Tests
describe("On the Menu page", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("should render h1", () => {
    renderer.render(defaultComponent);
    const h1 = renderer.getRenderOutput();
    expect(h1).toBeTruthy();
  });
});
