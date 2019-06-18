import { toCamelCase, toColonCase, toDotCase, toKebabCase, toPascalCase, toSnakeCase, toUpperSnakeCase } from '../src';

describe('toCamelCase', () => {
  it('should transform given kebab case string to camel case string', () => {
    expect(toCamelCase('hello-world')).toEqual('helloWorld');
  });

  it('should transform given snake case string to camel case string', () => {
    expect(toCamelCase('hello_world')).toEqual('helloWorld');
  });

  it('should transform given upper-snake case string to camel case string', () => {
    expect(toCamelCase('HELLO_WORLD')).toEqual('helloWorld');
  });

  it('should transform given colon case string to camel case string', () => {
    expect(toCamelCase('hello:world')).toEqual('helloWorld');
  });

  it('should transform given dot case string to camel case string', () => {
    expect(toCamelCase('hello.world')).toEqual('helloWorld');
  });

  it('should transform given pascal case string to camel case string', () => {
    expect(toCamelCase('HelloWorld')).toEqual('helloWorld');
  });

  it('should transform given camel case string to camel case string', () => {
    expect(toCamelCase('helloWorld')).toEqual('helloWorld');
  });

  it('should lowercase incompatible string', () => {
    expect(toCamelCase('hello123')).toEqual('hello123');
    expect(toCamelCase('Hello')).toEqual('hello');
  });
});

describe('toSnakeCase', () => {
  it('should transform given kebab case string snake case string', () => {
    expect(toSnakeCase('hello-world')).toEqual('hello_world');
  });

  it('should transform given snake case string snake case string', () => {
    expect(toSnakeCase('hello_world')).toEqual('hello_world');
  });

  it('should transform given upper-snake case string snake case string', () => {
    expect(toSnakeCase('HELLO_WORLD')).toEqual('hello_world');
  });

  it('should transform given colon case string snake case string', () => {
    expect(toSnakeCase('hello:world')).toEqual('hello_world');
  });

  it('should transform given dot case string snake case string', () => {
    expect(toSnakeCase('hello.world')).toEqual('hello_world');
  });

  it('should transform given pascal case string snake case string', () => {
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
  });

  it('should transform given camel case string snake case string', () => {
    expect(toSnakeCase('helloWorld')).toEqual('hello_world');
  });

  it('should lowercase incompatible string', () => {
    expect(toSnakeCase('hello123')).toEqual('hello123');
    expect(toSnakeCase('Hello')).toEqual('hello');
  });
});

describe('toDotCase', () => {
  it('should transform given kebab case string dot case string', () => {
    expect(toDotCase('hello-world')).toEqual('hello.world');
  });

  it('should transform given snake case string dot case string', () => {
    expect(toDotCase('hello_world')).toEqual('hello.world');
  });

  it('should transform given upper-snake case string dot case string', () => {
    expect(toDotCase('HELLO_WORLD')).toEqual('hello.world');
  });

  it('should transform given colon case string dot case string', () => {
    expect(toDotCase('hello:world')).toEqual('hello.world');
  });

  it('should transform given dot case string dot case string', () => {
    expect(toDotCase('hello.world')).toEqual('hello.world');
  });

  it('should transform given pascal case string dot case string', () => {
    expect(toDotCase('HelloWorld')).toEqual('hello.world');
  });

  it('should transform given camel case string dot case string', () => {
    expect(toDotCase('helloWorld')).toEqual('hello.world');
  });

  it('should lowercase incompatible string', () => {
    expect(toDotCase('hello123')).toEqual('hello123');
    expect(toDotCase('Hello')).toEqual('hello');
  });
});

describe('toColonCase', () => {
  it('should transform given kebab case string colon case string', () => {
    expect(toColonCase('hello-world')).toEqual('hello:world');
  });

  it('should transform given snake case string colon case string', () => {
    expect(toColonCase('hello_world')).toEqual('hello:world');
  });

  it('should transform given upper-snake case string colon case string', () => {
    expect(toColonCase('HELLO_WORLD')).toEqual('hello:world');
  });

  it('should transform given colon case string colon case string', () => {
    expect(toColonCase('hello:world')).toEqual('hello:world');
  });

  it('should transform given dot case string colon case string', () => {
    expect(toColonCase('hello.world')).toEqual('hello:world');
  });

  it('should transform given pascal case string colon case string', () => {
    expect(toColonCase('HelloWorld')).toEqual('hello:world');
  });

  it('should transform given camel case string colon case string', () => {
    expect(toColonCase('helloWorld')).toEqual('hello:world');
  });

  it('should lowercase incompatible string', () => {
    expect(toColonCase('hello123')).toEqual('hello123');
    expect(toColonCase('Hello')).toEqual('hello');
  });
});

describe('toKebabCase', () => {
  it('should transform given kebab case string to kebab case string', () => {
    expect(toKebabCase('hello-world')).toEqual('hello-world');
  });

  it('should transform given snake case string to kebab case string', () => {
    expect(toKebabCase('hello_world')).toEqual('hello-world');
  });

  it('should transform given upper-snake case string to kebab case string', () => {
    expect(toKebabCase('HELLO_WORLD')).toEqual('hello-world');
  });

  it('should transform given colon case string to kebab case string', () => {
    expect(toKebabCase('hello:world')).toEqual('hello-world');
  });

  it('should transform given dot case string to kebab case string', () => {
    expect(toKebabCase('hello.world')).toEqual('hello-world');
  });

  it('should transform given pascal case string to kebab case string', () => {
    expect(toKebabCase('HelloWorld')).toEqual('hello-world');
  });

  it('should transform given camel case string to kebab case string', () => {
    expect(toKebabCase('helloWorld')).toEqual('hello-world');
  });

  it('should lowercase incompatible string', () => {
    expect(toKebabCase('hello123')).toEqual('hello123');
    expect(toKebabCase('Hello')).toEqual('hello');
  });
});

describe('toPascalCase', () => {
  it('should transform given kebab case string to pascal case string', () => {
    expect(toPascalCase('hello-world')).toEqual('HelloWorld');
  });

  it('should transform given snake case string to pascal case string', () => {
    expect(toPascalCase('hello_world')).toEqual('HelloWorld');
  });

  it('should transform given upper-snake case string to pascal case string', () => {
    expect(toPascalCase('HELLO_WORLD')).toEqual('HelloWorld');
  });

  it('should transform given colon case string to pascal case string', () => {
    expect(toPascalCase('hello:world')).toEqual('HelloWorld');
  });

  it('should transform given dot case string to pascal case string', () => {
    expect(toPascalCase('hello.world')).toEqual('HelloWorld');
  });

  it('should transform given pascal case string to pascal case string', () => {
    expect(toPascalCase('HelloWorld')).toEqual('HelloWorld');
  });

  it('should transform given camel case string to pascal case string', () => {
    expect(toPascalCase('helloWorld')).toEqual('HelloWorld');
  });

  it('should uppercase first character of incompatible string', () => {
    expect(toPascalCase('hello123')).toEqual('Hello123');
    expect(toPascalCase('Hello')).toEqual('Hello');
  });
});

describe('toUpperSnakeCase', () => {
  it('should transform given kebab case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('hello-world')).toEqual('HELLO_WORLD');
  });

  it('should transform given snake case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('hello_world')).toEqual('HELLO_WORLD');
  });

  it('should transform given upper-snake case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('HELLO_WORLD')).toEqual('HELLO_WORLD');
  });

  it('should transform given colon case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('hello:world')).toEqual('HELLO_WORLD');
  });

  it('should transform given dot case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('hello.world')).toEqual('HELLO_WORLD');
  });

  it('should transform given pascal case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('HelloWorld')).toEqual('HELLO_WORLD');
  });

  it('should transform given camel case string to upper-snake case string', () => {
    expect(toUpperSnakeCase('helloWorld')).toEqual('HELLO_WORLD');
  });

  it('should uppercase everything in incompatible string', () => {
    expect(toUpperSnakeCase('hello123')).toEqual('HELLO123');
    expect(toUpperSnakeCase('Hello')).toEqual('HELLO');
  });
});
