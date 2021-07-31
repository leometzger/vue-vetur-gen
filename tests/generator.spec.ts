import * as path from "path";

import {
  Attribute,
  Tag,
  generateAttributes,
  generateTags,
} from "../src/generator";
import { VueComponent } from "../src/readComponents";

describe("generator.ts", () => {
  describe("generate", () => {
    const components: VueComponent[] = [
      {
        name: "component-one",
        description: "Description of component one",
        props: [
          { name: "id", description: "ID One" },
          { name: "items", description: "List items One" },
        ],
      },
      {
        name: "component-two",
        description: "Description of component two",
        props: [
          { name: "id", description: "ID Two" },
          { name: "name", description: "Name Two" },
        ],
      },
    ];

    describe("generateAttributes", () => {
      it("Should generate attributes based on doc", () => {
        const expectedAttributes: Attribute[] = [
          { "component-one/id": { description: "ID One" } },
          { "component-one/items": { description: "List items One" } },
          { "component-two/id": { description: "ID Two" } },
          { "component-two/name": { description: "Name Two" } },
        ];
        const attributes = generateAttributes(components);

        expect(attributes).toEqual(expectedAttributes);
      });
    });

    describe("generateTags", () => {
      it("Should generate tags from components", () => {
        const expectedTags: Tag[] = [
          {
            "component-one": {
              description: "Description of component one",
              attributes: ["component-one/id", "component-one/items"],
            },
          },
          {
            "component-two": {
              description: "Description of component two",
              attributes: ["component-two/id", "component-two/name"],
            },
          },
        ];
        const tags = generateTags(components);

        expect(tags).toEqual(expectedTags);
      });
    });
  });
});
