/*
 * @poppinss/colors
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Raw } from './src/Raw'
import { Kleur } from './src/Kleur'
import { Stringify } from './src/Stringify'

/**
 * Returns the best colors instance based upon the tty
 * and if in testing mode
 */
export function getBest(isTesting: boolean) {
  if (isTesting) {
    return new Stringify()
  }

  if (require('color-support').level > 0) {
    return new Kleur()
  }

  return new Raw()
}

export { Kleur as Colors }
export { Stringify as FakeColors }
export { Raw }
