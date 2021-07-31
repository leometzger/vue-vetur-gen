/**
 * Parsed configuration file
 */
export interface IConfiguration {
  src: string;
  outdir: string;
  ignore: string[];
}

/**
 * Parses the configuration
 *
 * @param configPath configuration
 * @returns configuration parsed
 */
export function parseConfig(configPath: string): IConfiguration {
  return {
    src: "src/",
    outdir: ".vetur/",
    ignore: [],
  };
}
