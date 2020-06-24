/*
 * @poppinss/colors
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import test from 'japa'
import { Raw } from '../src/Raw'
import { Stringify } from '../src/Stringify'

test.group('Colors | Stringify', () => {
  test('get string representation of color calls', (assert) => {
    const colors = new Stringify()
    assert.equal(colors.red('hello world'), 'red(hello world)')
  })

  test('get string representation of nested color calls', (assert) => {
    const colors = new Stringify()
    assert.equal(colors.red().dim('hello world'), 'red(dim(hello world))')
  })
})

test.group('Colors | Raw', () => {
  test('get string representation of color calls', (assert) => {
    const colors = new Raw()
    assert.equal(colors.red('hello world'), 'hello world')
  })

  test('get string representation of nested color calls', (assert) => {
    const colors = new Raw()
    assert.equal(colors.red().dim('hello world'), 'hello world')
  })
})
