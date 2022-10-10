<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [@poppinss/colors](#poppinsscolors)
  - [Why this package exists?](#why-this-package-exists)
  - [Usage](#usage)
    - [Raw implementation](#raw-implementation)
    - [Silent output](#silent-output)
  - [Pick based upon the runtime environment](#pick-based-upon-the-runtime-environment)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @poppinss/colors
> **Not yet another** ANSI colors library for Node.js

[![gh-workflow-image]][gh-workflow-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url] [![synk-image]][synk-url]

## Why this package exists?
There are already million color libraries in Node.js, so why are you creating another one, moron?.

Wait. This is not a yet another colors library. Instead, this package is a wrapper over [kleur](https://www.npmjs.com/package/kleur) with a couple other implementations to make testing easier and work seamlessly with terminals/stdout streams that does not support colors.

## Usage
Install the package from the npm registry as follows.

```sh
npm i @poppinss/colors
```

And use it as follows. The `ansi` method returns an instance of the [kleur](https://www.npmjs.com/package/kleur) package.

```ts
import useColors from '@poppinss/colors'
const colors = useColors.ansi()

console.log(colors.red('this is an error'))
console.log(colors.cyan('hello world'))
```

Chaining methods

```ts
const colors = useColors.ansi()
console.log(colors.red().bgBlack('this is an error'))
```

### Raw implementation
The raw implementation is ideal for testing. Instead of outputting ANSI escape codes, we wrap the string with transformation names. For example:

```ts
import useColors from '@poppinss/colors'
const colors = useColors.raw()

console.log(colors.red('hello world'))
// OUTPUT: red(hello world)

console.log(colors.bgBlack().red('hello world'))
// OUTPUT: bgBlack(red(hello world))
```

As you can notice, the output is a plain text value and therefore it is easier to write assertions against it.

```ts
assert.equal(colors.red('hello world'), 'red(hello world)')
```

### Silent output
The silent mode does not perform any transformations on the string and returns the value as it is. This is helpful when the output terminal or stdout stream does not support colors.

```ts
import useColors from '@poppinss/colors'
const colors = useColors.silent()

console.log(colors.red('hello world'))
// OUTPUT: hello world

console.log(colors.bgBlack().red('hello world'))
// OUTPUT: hello world
```

## Pick based upon the runtime environment
Ideally, you will be using one of the available implementations based upon some runtime environment. For example:

```ts
import useColors from '@poppinss/colors'
import supportsColor from 'supports-color'

const isTestEnv = process.env.NODE_ENV === 'test'

const colors = isTestEnv
  ? useColors.raw() // use raw in test environment
  : supportsColor.stdout
    ? useColors.ansi() // use kleur when stdout has colors
    : useColors.silent() // use silent mode 

export default colors
```

[gh-workflow-image]: https://img.shields.io/github/workflow/status/poppinss/colors/test?style=for-the-badge
[gh-workflow-url]: https://github.com/poppinss/colors/actions/workflows/test.yml "Github action"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"

[npm-image]: https://img.shields.io/npm/v/@poppinss/colors.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/colors 'npm'

[license-image]: https://img.shields.io/npm/l/@poppinss/colors?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'

[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/poppinss/colors?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/poppinss/colors?targetFile=package.json 'synk'
