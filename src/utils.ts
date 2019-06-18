import { CaseTransformer } from './case-transformer';

/**
 * Pointer interface for lifting a value to CaseTransformer.
 */
export function transformCase(str: string | string[]): CaseTransformer {
  return CaseTransformer.of(str);
}

/**
 * Find out the source case and apply transformation to camelCase.
 */
export function toCamelCase(str: string): string {
  return guessAndTransform('camel', str);
}

/**
 * Find out the source case and apply transformation to snake_case.
 */
export function toSnakeCase(str: string): string {
  return guessAndTransform('snake', str);
}

/**
 * Find out the source case and apply transformation to kebab-case.
 */
export function toKebabCase(str: string): string {
  return guessAndTransform('kebab', str);
}

/**
 * Find out the source case and apply transformation to dot.case.
 */
export function toDotCase(str: string): string {
  return guessAndTransform('dot', str);
}

/**
 * Find out the source case and apply transformation to colon:case.
 */
export function toColonCase(str: string): string {
  return guessAndTransform('colon', str);
}

/**
 * Find out the source case and apply transformation to PascalCase.
 */
export function toPascalCase(str: string): string {
  return guessAndTransform('pascal', str);
}

/**
 * Find out the source case and apply transformation to UPPER_SNAKE_CASE.
 */
export function toUpperSnakeCase(str: string): string {
  return guessAndTransform('upperSnake', str);
}

function guessAndTransform(targetCase: keyof CaseTransformer, str: string): string {
  const dividers = ['-', '_', '.', ':'];
  const requiredDivider = dividers.find((divider) => str.includes(divider));

  if (requiredDivider === '-') {
    return transformCase(str).from.kebab.to[targetCase].toString();
  }

  if (requiredDivider === '.') {
    return transformCase(str).from.dot.to[targetCase].toString();
  }

  if (requiredDivider === ':') {
    return transformCase(str).from.colon.to[targetCase].toString();
  }

  if (requiredDivider === '_') {
    return transformCase(str).from.snake.to[targetCase].toString();
  }

  return transformCase(str).from.pascal.to[targetCase].toString();
}
