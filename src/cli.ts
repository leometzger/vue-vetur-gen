import { program } from "commander";

function main() {
  program
    .option("-c, --config <configPath>", "Vetur generation configuration", null)
    .option("-o, --out-dir <outdir>", "Output directory", ".vetur/")
    .option("-s, --src", "Source directory", "src/")
    .description("CLI that generates vetur JSON files");

  program.parse(process.argv);

  const { config, outdir } = program.opts();
}

main();
