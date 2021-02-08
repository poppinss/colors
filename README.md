<div align="center"><img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1557762307/poppinss_iftxlt.jpg" width="600px"></div>

# Colors

> Wrapper on top of Kleur with support for testing color calls.

[![circleci-image]][circleci-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url] [![synk-image]][synk-url]

This module is a wrapper on top of Kleur to make it easier to test the output generated by the kleur API. The API exposed is 100% the same as kleur.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Why use this module?](#why-use-this-module)
  - [The problem](#the-problem)
  - [Our solution](#our-solution)
  - [How to use it in real world?](#how-to-use-it-in-real-world)
- [Installation](#installation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why use this module?

This module attempts to solve two specific problems.

- Make it easier to test strings using kleur color transformations.
- Provide a alternate implementation for non-tty terminals.

### The problem

Let's imagine you are writing a test to ensure that `function dummy` outputs an error message to the console in certain situation.

```js
import { bgRed } from 'kleur'

function dummy() {
  if (someCondition) {
    console.log(bgRed().white('Error'))
  }
}
```

You may attempt to test the output as follows:

```js
const output = trapConsoleMessage()
dummy()

assert.equal(output, 'Error') // fails
```

The assertion will fail, since the string `Error` has ansi sequences applied to it to make it colorful.

To workaround this behavior, you can use a module like [strip-ansi](https://github.com/chalk/strip-ansi) to string the ansi sequences and write assertions against the plain string.

```js
import stripAnsi from 'strip-ansi'

const output = trapConsoleMessage()
dummy()

assert.equal(stripAnsi(output), 'Error') // passes
```

Now, your assertions are passing, but there is no way to know which kleur transformations were applied to the string.

### Our solution

Instead of relying on `strip-ansi`, we ship with an alternative implementation of kleur, which doesn't apply ansi sequences at first place. Example:

```js
import { FakeColors } from '@poppinss/colors'
const colors = new FakeColors()

const output = colors.bgRed().white('Error')
assert.equal(output, 'bgRed(white(Error))') // passes
```

**Notice the difference in the output?** Instead of applying the background color and the text color. We wrap the value inside the applied transformations and return it back as a string.

### How to use it in real world?

At AdonisJS, we rely on the `NODE_ENV` environment variable to decide the implementation to choose. For example:

```ts
import { FakeColors, Colors } from '@poppinss/colors'

export default const colors = process.env.NODE_ENV === 'testing'
  ? new FakeColors()
  : new Colors()
```

Now, inside the entire codebase, we import the above helper for colorizing output.

```ts
import colors from './helpers/colors'
colors.red('Error')
```

## Installation

Install the package from npm registry as follows:

```sh
npm i @poppinss/colors

# yarn
yarn add @poppinss/colors
```

and then use it as follows:

```ts
import { FakeColors, Colors, Raw } from '@poppinss/colors'

// Real implementation
const colors = new Colors()

// Use for testing
const fakeColors = new FakeColors()

// When running in non-tty terminals
const rawColors = new Raw()
```

[circleci-image]: https://img.shields.io/circleci/project/github/poppinss/colors/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/poppinss/colors 'circleci'
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
[npm-image]: https://img.shields.io/npm/v/@poppinss/colors.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/colors 'npm'
[license-image]: https://img.shields.io/npm/l/@poppinss/colors?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'
[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/poppinss/colors?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/poppinss/colors?targetFile=package.json 'synk'
