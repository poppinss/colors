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
  })

  test('get string representation of multiple color transformations', ({ assert }) => {
    const colors = useColors.silent()
    assert.equal(colors.red().dim('hello world'), 'hello world')
  })
})

test.group('Colors | Kleur', () => {
  test('get colored string', ({ assert }) => {
    const colors = useColors.ansi()
    assert.equal(colors.red('hello world'), kleur.red('hello world'))
  })

  test('apply multiple transforms', ({ assert }) => {
    const colors = useColors.ansi()
    assert.equal(colors.red().bgBlack('hello world'), kleur.red().bgBlack('hello world'))
  })
})
