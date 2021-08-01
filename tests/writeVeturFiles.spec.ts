import { Tag, Attribute } from "../src/generator";
import { writeVeturFiles } from "../src/writeVeturFiles";

import { IConfiguration } from "../src/config";
import { IWriter } from "../src/util";

describe("writeVeturFiles", () => {
  const writer: IWriter = {
    write: jest.fn().mockResolvedValue(),
    mkdir: jest.fn().mockReturnValue(),
  };

  it("should write attribute and tags JSON files", async () => {
    const attributes: Attribute[] = [
      { "component-one/id": { description: "ID of component one" } },
      { "component-one/name": { description: "Name of component one" } },
      { "component-two/id": { description: "ID of component two" } },
      {
        "component-two/description": {
          description: "Description of component two",
        },
      },
    ];
    const tags: Tag[] = [
      {
        "component-one": {
          attributes: ["id", "name"],
          description: "Description of component one",
        },
      },
      {
        "component-two": {
          attributes: ["id", "description"],
          description: "Description of component two",
        },
      },
    ];
    const config: IConfiguration = {
      ignore: [],
      outdir: "dist/",
      src: "",
    };

    await writeVeturFiles(writer, config, attributes, tags);

    expect(writer.mkdir).toBeCalledWith("dist/");
    expect(writer.write).toBeCalledWith(
      expect.stringMatching(/.+dist\/tags.json$/),
      {
        "component-one": {
          attributes: ["id", "name"],
          description: "Description of component one",
        },
        "component-two": {
          attributes: ["id", "description"],
          description: "Description of component two",
        },
      }
    );

    expect(writer.write).toBeCalledWith(
      expect.stringMatching(/.+dist\/attributes.json$/),
      {
        "component-one/id": { description: "ID of component one" },
        "component-one/name": { description: "Name of component one" },
        "component-two/id": { description: "ID of component two" },
        "component-two/description": {
          description: "Description of component two",
        },
      }
    );
  });
});
