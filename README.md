# @priestine/case-transformer

[![Build Status](https://travis-ci.org/priestine/case-transformer.svg?branch=master)](https://travis-ci.org/priestine/case-transformer)
[![codecov](https://codecov.io/gh/priestine/case-transformer/branch/master/graph/badge.svg)](https://codecov.io/gh/priestine/case-transformer)
[![npm](https://img.shields.io/npm/dt/@priestine/case-transformer.svg)](https://www.npmjs.com/package/@priestine/case-transformer)
[![npm](https://img.shields.io/npm/v/@priestine/case-transformer.svg)](https://www.npmjs.com/package/@priestine/case-transformer)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![versioning: semantics](https://img.shields.io/badge/versioning-semantics-912e5c.svg)](https://github.com/priestine/semantics)

Transform kebab back to camel.  Or maybe make a kebab from Pascal.

## Installation

```bash
npm i -g @priestine/case-transformer
```

## Usage

UNDER CONSTRUCTION!

```javascript
const { transformCase, toUpperSnakeCase } = require('@priestine/case-transformer');

// The eloquent and declarative way
const hw = transformCase('helloWorld').from.camel.to.kebab;
hw; // hello-world

// The deductive but dangerous way (there are dragons here!)
const H_W = toUpperSnakeCase('helloWorld');
H_W; // HELLO_WORLD
```

```typescript
import { transformCase } from '@priestine/case-transformer';

// The TypeScript-friendly way
const hW = transformCase('here.there').from.dot.to.snake.toString();
hW; // here_there
```
