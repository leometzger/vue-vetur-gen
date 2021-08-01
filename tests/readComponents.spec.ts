import * as path from "path";
import { VueComponent, readComponents } from "../src/readComponents";

describe("readComponents", () => {
  const expectedComponents: VueComponent[] = [
    {
      name: "component-test",
      description: "",
      props: [{ name: "prop1", description: "My prop help description" }],
    },
    {
      name: "testing-component-2",
      description: "",
      props: [{ name: "prop1", description: "My prop help description" }],
    },
  ];

  it("should read vue components", async () => {
    const components = await readComponents({
      ignore: [],
      outdir: ".vetur/",
      src: path.resolve(__dirname, "files"),
    });

    expect(components).toEqual(expectedComponents);
  });

  it("should ignore patterns passed through configuration", async () => {
    const components = await readComponents({
      ignore: [/component-test\.vue/],
      outdir: ".vetur/",
      src: path.resolve(__dirname, "files"),
    });

    expect(components.length).toBe(1);
    expect(components[0]).toEqual(expectedComponents[1]);
  });
});
