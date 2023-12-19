import { expect, it, describe } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { createRenderer } from "react-test-renderer/shallow";

import NavBar from "../components/NavBar";

const renderer = createRenderer();

const defaultComponent = (
  <MemoryRouter initialEntries={["/"]}>
    <NavBar />
  </MemoryRouter>
);

// Tests
describe("On the NavBar component", () => {
  it("should render and match the snapshot", () => {
    renderer.render(defaultComponent);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("should render the links", () => {
    renderer.render(defaultComponent);
    const h1 = renderer.getRenderOutput();
    expect(h1).toBeTruthy();
  });
});
