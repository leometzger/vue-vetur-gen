import * as path from "path";

/**
 * Parsed configuration file
 */
export interface IConfiguration {
  src: string;
  outdir: string;
  ignore: RegExp[];
}

/**
 * CLI input params
 */
export interface InputParams {
  outDir: string;
  src: string;
  config?: string;
}

/**
 * Parses the configuration
 *
 * @param configPath configuration
 * @returns configuration parsed
 */
export function parseConfig(params: InputParams): IConfiguration {
  let configurationFile = {
    ignore: [],
  };

  if (params.config !== null) {
    const configPath = path.resolve(process.cwd(), params.config);
    configurationFile = require(configPath);
  }

  const configuration: IConfiguration = {
    outdir: params.outDir,
    src: params.src,
    ignore: configurationFile.ignore,
    ...configurationFile,
  };

  return configuration;
}
