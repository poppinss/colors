# Colors
> Wrapper on top of Kleur with support for testing color calls.

This module is a wrapper on top of Kleur to make it easier to test the output generated using the kleur API. The API exposed is 100% the same as kleur.

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Why use this module?](#why-use-this-module)
- [Usage](#usage)
- [Maintainers](#maintainers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why use this module?
Have you ever wonder, how to test the output of function calls like the following?

```js
import { bgRed, white } from 'kleur'
assert.equal(bgRed().white('Error'), 'Error') // fails
```

Well, you can make use of modules like [strip-ansi](https://github.com/chalk/strip-ansi) to strip the ansi codes and get back the plain string.

```js
import { bgRed, white } from 'kleur'
import stripAnsi from 'strip-ansi'

assert.equal(stripAnsi(bgRed().white('Error')), 'Error') // passes
```

However, this module takes a step forward with a fake colors API, that you can use during testing to reliably test the output.

```js
import { FakeColors } from '@poppinss/colors'
const colors = new FakeColors()

assert.equal(colors.bgRed().white('Error'), 'bgRed(white(Error))') // passes
```

## Usage
Install the package from npm registry as follows:

```sh
npm i @poppinss/colors

# yarn
yarn add @poppinss/colors
```

and then use it as follows:

```ts
import { Colors } from '@poppinss/colors'
const colors = new Colors()

// API same as kleur from here
```

During test, you can make your code rely on `FakeColors` instead and for that, you may have to use Dependency Injection.

```ts
import { FakeColors } from '@poppinss/colors'
const colors = new FakeColors()

// API same as kleur from here
```

## Maintainers
[Harminder virk](https://github.com/thetutlage)

[circleci-image]: https://img.shields.io/circleci/project/github/poppinss/colors/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/poppinss/colors "circleci"

[npm-image]: https://img.shields.io/npm/v/@poppinss/colors.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/colors "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/aur/license/pac.svg?style=for-the-badge
