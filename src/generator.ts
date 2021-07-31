import { ComponentDoc } from "vue-docgen-api";
import { IConfiguration } from "./config";

/**
 *
 */
export interface Attribute {
  name: string;
  description: string;
}

/**
 *
 */
export interface Tag {
  name: string;
  description: string;
  attributes: string[];
}

/**
 * Read components from components directory and parse them
 *
 * @param config Vue Vetur Generator configuration
 * @returns array of components
 */
export async function readComponents(
  config: IConfiguration
): Promise<ComponentDoc[]> {
  return [];
}

export function generateTags(components: ComponentDoc[]): Tag[] {
  return [];
}

export function generateAttributes(components: ComponentDoc[]): Attribute[] {
  return [];
}
