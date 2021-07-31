import { VueComponent } from "./readComponents";

export interface Attribute {
  [name: string]: {
    description: string;
  };
}

export interface Tag {
  [name: string]: {
    description: string;
    attributes: string[];
  };
}

/**
 * Transform component docs to
 * Tags format
 *
 * @param components
 * @returns
 */
export function generateTags(components: VueComponent[]): Tag[] {
  return components.map((component) => {
    return {
      [component.name]: {
        description: component.description,
        attributes: component.props.map(
          (prop) => `${component.name}/${prop.name}`
        ),
      },
    };
  });
}

/**
 * Transform component docs to
 * Attributes format
 *
 * @param components
 * @returns
 */
export function generateAttributes(components: VueComponent[]): Attribute[] {
  const attributes: Attribute[] = [];

  for (let component of components) {
    for (let prop of component.props) {
      const attributeName = `${component.name}/${prop.name}`;

      attributes.push({
        [attributeName]: {
          description: prop.description,
        },
      });
    }
  }

  return attributes;
}
