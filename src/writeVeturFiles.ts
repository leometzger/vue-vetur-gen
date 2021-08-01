import * as path from "path";

import { Attribute, Tag } from "./generator";
import { IConfiguration } from "./config";
import { IWriter } from "./util";

/**
 * @param configuration veturgen configuration
 * @param attributes props dos componentes
 * @param tags componentes dos tags
 */
export async function writeVeturFiles(
  writer: IWriter,
  configuration: IConfiguration,
  attributes: Attribute[],
  tags: Tag[]
) {
  writer.mkdir(configuration.outdir);
  const outputDir = path.resolve(process.cwd(), configuration.outdir);

  const tagsJSON = reduceArrayToObject(tags);
  const attributesJSON = reduceArrayToObject(attributes);

  await Promise.all([
    writer.write(path.resolve(outputDir, "tags.json"), tagsJSON),
    writer.write(path.resolve(outputDir, "attributes.json"), attributesJSON),
  ]);
}

/**
 * @private
 * @param array
 */
function reduceArrayToObject(array: any[]): any {
  return array.reduce((reduced, obj) => {
    return {
      ...reduced,
      ...obj,
    };
  }, {});
}
