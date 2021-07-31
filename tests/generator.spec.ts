import { IConfiguration } from "../src/config";
import { ComponentDoc } from "vue-docgen-api";
import {
  readComponents,
  generateAttributes,
  generateTags,
  Tag,
  Attribute,
} from "../src/generator";

describe("generator.ts", () => {
  const components: ComponentDoc[] = [
    {
      displayName: "component-one",
      exportName: "default",
      description: "Description of component one",
      props: [
        { name: "id", description: "ID One" },
        { name: "items", description: "List items One" },
      ],
    },
    {
      displayName: "component-two",
      exportName: "default",
      description: "Description of component one",
      props: [
        { name: "id", description: "ID Two" },
        { name: "name", description: "Name Two" },
      ],
    },
  ];

  describe("readComponents", () => {
    it("", () => {
      const config: IConfiguration = {
        ignore: [],
        outdir: "dist/",
        src: "src/",
      };
    });
  });

  describe("generateAttributes", () => {
    it("Should generate attributes based on doc", () => {
      const expectedAttributes: Attribute[] = [
        { name: "component-one/id", description: "ID One" },
        { name: "component-one/items", description: "List items One" },
        { name: "component-two/id", description: "ID Two" },
        { name: "component-two/name", description: "Name Two" },
      ];

      expect(generateAttributes(components)).toEqual(expectedAttributes);
    });
  });

  describe("generateTags", () => {
    it("Should generate tags from components", () => {
      const expectedTags: Tag[] = [
        {
          name: "component-one",
          description: "ID One",
          attributes: ["component-one/id", "component-one/items"],
        },
        {
          name: "component-two",
          description: "ID Two",
          attributes: ["component-two/id", "component-one/name"],
        },
      ];

      expect(generateTags(components)).toEqual(expectedTags);
    });
  });
});
