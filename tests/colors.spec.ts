/**
 * @poppinss/colors
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import kleur from 'kleur'
import { test } from '@japa/runner'

import useColors from '../index.js'

test.group('Colors | Raw', () => {
  test('get string representation of color transformations', ({ assert }) => {
    const colors = useColors.raw()
    assert.equal(colors.red('hello world'), 'red(hello world)')
    assert.equal(colors.black('hello world'), 'black(hello world)')
    assert.equal(colors.green('hello world'), 'green(hello world)')
    assert.equal(colors.yellow('hello world'), 'yellow(hello world)')
    assert.equal(colors.blue('hello world'), 'blue(hello world)')
    assert.equal(colors.magenta('hello world'), 'magenta(hello world)')
    assert.equal(colors.cyan('hello world'), 'cyan(hello world)')
    assert.equal(colors.white('hello world'), 'white(hello world)')
    assert.equal(colors.gray('hello world'), 'gray(hello world)')
    assert.equal(colors.grey('hello world'), 'grey(hello world)')
    assert.equal(colors.bgRed('hello world'), 'bgRed(hello world)')
    assert.equal(colors.bgGreen('hello world'), 'bgGreen(hello world)')
    assert.equal(colors.bgYellow('hello world'), 'bgYellow(hello world)')
    assert.equal(colors.bgBlue('hello world'), 'bgBlue(hello world)')
    assert.equal(colors.bgMagenta('hello world'), 'bgMagenta(hello world)')
    assert.equal(colors.bgCyan('hello world'), 'bgCyan(hello world)')
    assert.equal(colors.bgWhite('hello world'), 'bgWhite(hello world)')
    assert.equal(colors.reset('hello world'), 'reset(hello world)')
    assert.equal(colors.bold('hello world'), 'bold(hello world)')
    assert.equal(colors.italic('hello world'), 'italic(hello world)')
    assert.equal(colors.underline('hello world'), 'underline(hello world)')
    assert.equal(colors.inverse('hello world'), 'inverse(hello world)')
    assert.equal(colors.hidden('hello world'), 'hidden(hello world)')
    assert.equal(colors.strikethrough('hello world'), 'strikethrough(hello world)')
  })

  test('get string representation of multiple color transformations', ({ assert }) => {
    const colors = useColors.raw()
    assert.equal(colors.red().bgBlack().dim('hello world'), 'red(bgBlack(dim(hello world)))')
  })
})

test.group('Colors | Silent', () => {
  test('get string representation of color transformations', ({ assert }) => {
    const colors = useColors.silent()
    assert.equal(colors.red('hello world'), 'hello world')
    assert.equal(colors.black('hello world'), 'hello world')
    assert.equal(colors.green('hello world'), 'hello world')
    assert.equal(colors.yellow('hello world'), 'hello world')
    assert.equal(colors.blue('hello world'), 'hello world')
    assert.equal(colors.magenta('hello world'), 'hello world')
    assert.equal(colors.cyan('hello world'), 'hello world')
    assert.equal(colors.white('hello world'), 'hello world')
    assert.equal(colors.gray('hello world'), 'hello world')
    assert.equal(colors.grey('hello world'), 'hello world')
    assert.equal(colors.bgRed('hello world'), 'hello world')
    assert.equal(colors.bgGreen('hello world'), 'hello world')
    assert.equal(colors.bgYellow('hello world'), 'hello world')
    assert.equal(colors.bgBlue('hello world'), 'hello world')
    assert.equal(colors.bgMagenta('hello world'), 'hello world')
    assert.equal(colors.bgCyan('hello world'), 'hello world')
    assert.equal(colors.bgWhite('hello world'), 'hello world')
    assert.equal(colors.reset('hello world'), 'hello world')
    assert.equal(colors.bold('hello world'), 'hello world')
    assert.equal(colors.italic('hello world'), 'hello world')
    assert.equal(colors.underline('hello world'), 'hello world')
    assert.equal(colors.inverse('hello world'), 'hello world')
    assert.equal(colors.hidden('hello world'), 'hello world')
    assert.equal(colors.strikethrough('hello world'), 'hello world')
  })

  test('get string representation of multiple color transformations', ({ assert }) => {
    const colors = useColors.silent()
    assert.equal(colors.red().bgBlack().dim('hello world'), 'hello world')
  })
})

test.group('Colors | Kleur', () => {
  test('get colored string', ({ assert }) => {
    const colors = useColors.ansi()

    assert.equal(colors.red('hello world'), kleur.red('hello world'))
    assert.equal(colors.black('hello world'), kleur.black('hello world'))
    assert.equal(colors.green('hello world'), kleur.green('hello world'))
    assert.equal(colors.yellow('hello world'), kleur.yellow('hello world'))
    assert.equal(colors.blue('hello world'), kleur.blue('hello world'))
    assert.equal(colors.magenta('hello world'), kleur.magenta('hello world'))
    assert.equal(colors.cyan('hello world'), kleur.cyan('hello world'))
    assert.equal(colors.white('hello world'), kleur.white('hello world'))
    assert.equal(colors.gray('hello world'), kleur.gray('hello world'))
    assert.equal(colors.grey('hello world'), kleur.grey('hello world'))
    assert.equal(colors.bgRed('hello world'), kleur.bgRed('hello world'))
    assert.equal(colors.bgGreen('hello world'), kleur.bgGreen('hello world'))
    assert.equal(colors.bgYellow('hello world'), kleur.bgYellow('hello world'))
    assert.equal(colors.bgBlue('hello world'), kleur.bgBlue('hello world'))
    assert.equal(colors.bgMagenta('hello world'), kleur.bgMagenta('hello world'))
    assert.equal(colors.bgCyan('hello world'), kleur.bgCyan('hello world'))
    assert.equal(colors.bgWhite('hello world'), kleur.bgWhite('hello world'))
    assert.equal(colors.reset('hello world'), kleur.reset('hello world'))
    assert.equal(colors.bold('hello world'), kleur.bold('hello world'))
    assert.equal(colors.italic('hello world'), kleur.italic('hello world'))
    assert.equal(colors.underline('hello world'), kleur.underline('hello world'))
    assert.equal(colors.inverse('hello world'), kleur.inverse('hello world'))
    assert.equal(colors.hidden('hello world'), kleur.hidden('hello world'))
    assert.equal(colors.strikethrough('hello world'), kleur.strikethrough('hello world'))
  })

  test('apply multiple transforms', ({ assert }) => {
    const colors = useColors.ansi()
    assert.equal(
      colors.red().bgBlack().dim('hello world'),
      kleur.red().bgBlack().dim('hello world')
    )
  })
})
