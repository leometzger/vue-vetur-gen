import * as fs from "fs";
import * as shell from "shelljs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);

export interface IWriter {
  write(path: string, data: any): Promise<void>;
  mkdir(dir: string): void;
}

/**
 *
 */
export class VeturWriter implements IWriter {
  write(path: string, data) {
    return writeFile(path, JSON.stringify(data, null, 2));
  }

  mkdir(dir: string) {
    shell.mkdir("-p", dir);
  }
}
