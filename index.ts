/**
 * @poppinss/colors
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Raw } from './src/raw.js'
import { Kleur } from './src/kleur.js'
import { Colors } from './src/base.js'
import { Silent } from './src/silent.js'

const useColors: {
  ansi(): Colors
  silent(): Colors
  raw(): Colors
} = {
  /**
   * Kleur implementation
   */
  ansi() {
    return new Kleur()
  },

  /**
   * Silent implementation. Returns the string
   * as it is
   */
  silent() {
    return new Silent()
  },

  /**
   * Raw implementation. Wraps string with applied
   * transformations as plain text.
   */
  raw() {
    return new Raw()
  },
}

export default useColors
