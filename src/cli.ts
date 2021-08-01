import * as path from "path";
import { program } from "commander";
import { IConfiguration } from "./config";

function main() {
  program
    .option("-c, --config <configPath>", "Vetur generation configuration", null)
    .option("-o, --out-dir <outdir>", "Output directory", ".vetur/")
    .option("-s, --src", "Source directory", "src/")
    .description("CLI that generates vetur JSON files");

  program.parse(process.argv);

  const { config, outDir, src } = program.opts();

  const configPath = path.resolve(process.cwd(), config);
  const configurationFile = require(configPath);

  const configuration: IConfiguration = { outDir, src, ...configurationFile };
}

main();
