import { flatten } from "lodash";
import { ComponentDoc } from "vue-docgen-api";
import { IConfiguration } from "./config";

export interface Attribute {
  [name: string]: {
    description: string;
  };
}

/**
 *
 */
export interface Tag {
  [name: string]: {
    description: string;
    attributes: string[];
  };
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

/**
 * Transform component docs to
 * Tags format
 *
 * @param components
 * @returns
 */
export function generateTags(components: ComponentDoc[]): Tag[] {
  return components.map((component) => {
    return {
      [component.displayName]: {
        description: component.description,
        attributes: component.props.map(
          (prop) => `${component.displayName}/${prop.name}`
        ),
      },
    };
  });
}

export function generateAttributes(components: ComponentDoc[]): Attribute[] {
  const attributes: Attribute[] = [];

  for (let component of components) {
    for (let prop of component.props) {
      const attributeName = `${component.displayName}/${prop.name}`;

      attributes.push({
        [attributeName]: {
          description: prop.description,
        },
      });
    }
  }

  return attributes;
}
