import * as fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);

export interface IWriter {
  write(path: string, data: any): Promise<void>;

  writeJSON(path: string, data: any): Promise<void>;
}

export class VeturWriter implements IWriter {
  write(path: string, data) {
    return writeFile(path, data);
  }

  writeJSON(path: string, data) {
    return writeFile(path, JSON.stringify(data));
  }
}
