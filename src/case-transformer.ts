/**
 * Transformer for string case, e.g. kebab-case to camelCase.
 */
export class CaseTransformer {
  /**
   * Static method for applying Title Case for the word.
   */
  public static titleize(x: string): string {
    return x[0].toUpperCase().concat(x.slice(1).toLowerCase());
  }

  /**
   * Pointer interface for lifting a value into CaseTransformer.
   */
  public static of(x: string | string[]): CaseTransformer {
    return new CaseTransformer(x);
  }

  /**
   * @constructor
   */
  public constructor(private input: string | string[]) {}

  /**
   * Fluent interface for building sentence-like transformations.
   * E.g. new CaseTransformer('testMe').from.camel.to.snake; // test_me
   */
  public to: CaseTransformer = this;

  /**
   * Fluent interface for building sentence-like transformations.
   * E.g. new CaseTransformer('testMe').from.camel.to.snake; // test_me
   */
  public from: CaseTransformer = this;

  /**
   * Transformer for camelCase.
   * If input is `string[]`, returns camelCased string.
   * If input is `string`, returns new CaseTransformer with split camelCased string
   * for chaining.
   */
  public camel: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w, i) => (i === 0 ? w.toLowerCase() : CaseTransformer.titleize(w))).join('') as any)
    : CaseTransformer.of(this.input.split(/(?=[A-Z])/).map((w) => w.toLowerCase()));

  /**
   * Transformer for dot.case.
   * If input is `string[]`, returns dot.cased string.
   * If input is `string`, returns new CaseTransformer with split dot.cased string
   * for chaining.
   */
  public dot: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => w.toLowerCase()).join('.') as any)
    : CaseTransformer.of(this.input.split('.'));

  /**
   * Transformer for colon:case.
   * If input is `string[]`, returns colon:cased string.
   * If input is `string`, returns new CaseTransformer with split colon:cased
   * string for chaining.
   */
  public colon: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => w.toLowerCase()).join(':') as any)
    : CaseTransformer.of(this.input.split(':'));

  /**
   * Transformer for kebab-case.
   * If input is `string[]`, returns kebab-cased string.
   * If input is `string`, returns new CaseTransformer with split kebab-cased
   * string for chaining.
   */
  public kebab: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => w.toLowerCase()).join('-') as any)
    : CaseTransformer.of(this.input.split('-'));

  /**
   * Transformer for snake_case.
   * If input is `string[]`, returns snake_cased string.
   * If input is `string`, returns new CaseTransformer with split snake_cased
   * string for chaining.
   */
  public snake: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => w.toLowerCase()).join('_') as any)
    : CaseTransformer.of(this.input.split('_'));

  /**
   * Transformer for snake_case.
   * If input is `string[]`, returns SNAKE_CASED string.
   * If input is `string`, returns new CaseTransformer with split SNAKE_CASED
   * string for chaining.
   */
  public upperSnake: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => w.toUpperCase()).join('_') as any)
    : CaseTransformer.of(this.input.split('_'));

  /**
   * Transformer for PascalCase.
   * If input is `string[]`, returns PascalCased string.
   * If input is `string`, returns new CaseTransformer with split PascalCased
   * string for chaining.
   */
  public pascal: CaseTransformer = Array.isArray(this.input)
    ? (this.input.map((w) => CaseTransformer.titleize(w)).join('') as any)
    : CaseTransformer.of(this.input.split(/(?=[A-Z])/).map((w) => w.toLowerCase()));

  /**
   * Fold current internally stored value.
   */
  public fold(): string | string[] {
    return this.input;
  }

  /**
   * Coerce current state of the input to a string. Useful in TypeScript
   * realm to avoid disjunction (string | string[]).
   */
  public toString(): string {
    return typeof this.input === 'string' ? this.input : this.input.join('');
  }
}
