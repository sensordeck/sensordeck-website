import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

export function translateLegacyText(
  value: string,
  translations: Record<string, string>,
): string {
  return Object.entries(translations)
    .sort(([left], [right]) => right.length - left.length)
    .reduce(
      (translated, [source, target]) => translated.split(source).join(target),
      value,
    );
}

export function translateLegacyTree(
  node: ReactNode,
  translations: Record<string, string>,
): ReactNode {
  if (typeof node === "string") {
    return translateLegacyText(node, translations);
  }

  if (Array.isArray(node)) {
    return node.map((child) => translateLegacyTree(child, translations));
  }

  if (!isValidElement(node)) {
    return node;
  }

  const element = node as ReactElement<Record<string, unknown>>;
  const translatedProps = { ...element.props };

  for (const propName of ["aria-label", "defaultValue", "placeholder", "title"]) {
    const propValue = translatedProps[propName];
    if (typeof propValue === "string") {
      translatedProps[propName] = translateLegacyText(propValue, translations);
    }
  }

  if ("children" in element.props) {
    translatedProps.children = Children.map(element.props.children as ReactNode, (child) =>
      translateLegacyTree(child, translations),
    );
  }

  return cloneElement(element, translatedProps);
}
