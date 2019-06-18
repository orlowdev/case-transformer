import {
  toCamelCase,
  toColonCase,
  toDotCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toUpperSnakeCase,
  transformCase,
} from '../src';

describe('CaseTransformer', () => {
  describe('transformCase', () => {
    it('should apply transformation from one given case to another', () => {
      expect(transformCase('helloWorld').from.camel.to.kebab).toEqual('hello-world');
    });
  });

  describe('transformCase', () => {
    it('should apply transformation from one given case to another', () => {
      expect(transformCase('helloWorld').from.camel.to.kebab).toEqual('hello-world');
    });
  });

  describe('toString', () => {
    it('should return resulting string if it is ready', () => {
      expect(transformCase('helloWorld').from.camel.to.kebab.toString()).toEqual('hello-world');
    });

    it('should return initial value if transformation was not applied', () => {
      expect(transformCase('helloWorld').from.camel.toString()).toEqual('helloworld');
    });

    it('should return unchanged value if no transformation was applied', () => {
      expect(transformCase('123').toString()).toEqual('123');
    });
  });

  describe('fold', () => {
    it('should return current internal contents of the input', () => {
      expect(transformCase('helloWorld').from.camel.fold()).toEqual(['hello', 'world']);
    });
  });
});
