import { program } from "commander";
import { parseConfig } from "./config";
import { readComponents } from "./readComponents";
import { generateAttributes, generateTags } from "./generator";
import { writeVeturFiles } from "./writeVeturFiles";
import { VeturWriter } from "./util";

async function main() {
  program
    .option("-c, --config <configPath>", "Vetur generation configuration", null)
    .option("-o, --out-dir <outdir>", "Output directory", ".vetur/")
    .option("-s, --src <src>", "Source directory", "src/")
    .description("CLI that generates vetur JSON files");
  program.parse(process.argv);

  const { outDir, config, src } = program.opts();

  const configuration = parseConfig({ outDir, src, config });
  const writer = new VeturWriter();

  const components = await readComponents(configuration);
  const [tags, attributes] = await Promise.all([
    generateTags(components),
    generateAttributes(components),
  ]);
  await writeVeturFiles(writer, configuration, attributes, tags);
}

main();
