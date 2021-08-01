import * as shell from "shelljs";
import kebabCase from "lodash.kebabcase";
import { ComponentDoc, parse } from "vue-docgen-api";
import { IConfiguration } from "./config";

export interface VueProp {
  name: string;
  description?: string;
}

export interface VueComponent {
  name: string;
  props: VueProp[];
  description?: string;
}

/**
 * Read components from components directory and parse them
 *
 * @param config Vue Vetur Generator configuration
 * @returns array of components
 */
export async function readComponents(
  config: IConfiguration
): Promise<VueComponent[]> {
  const componentsPath = shell.ls("-R", `${config.src}`);

  const componentsDocsPromises = componentsPath
    .filter((componentPath) => /.+\.vue/.test(componentPath))
    .filter((componentPath) => isNotIgnored(config, componentPath))
    .map((componentPath) => parse(`${config.src}/${componentPath}`));

  const componentsDocs: ComponentDoc[] = await Promise.all(
    componentsDocsPromises
  );

  return componentsDocs.map((component) => {
    return {
      name: kebabCase(component.displayName),
      description: component.description,
      props: component.props.map((prop) => ({
        name: prop.name,
        description: prop.description,
      })),
    };
  });
}

/**
 * @private
 * @param config
 * @param path
 * @returns
 */
function isNotIgnored(config: IConfiguration, path: string): boolean {
  if (config.ignore.length === 0) {
    return true;
  }

  return config.ignore.every((ignore) => !ignore.test(path));
}
