/**
 * @poppinss/colors
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import kleur from 'kleur'
import { Colors } from './base.js'
import { ColorTransformations } from './types.js'

/**
 * Concrete implementation of the Colors class using Kleur
 */
export class Kleur extends Colors {
  #chain?: kleur.Kleur

  constructor() {
    super()
    kleur.enabled = true
  }

  #dispose<T>(value: T, callback: () => void) {
    callback()
    return value
  }

  /**
   * Perform the given transformation. The abstract Color class calls this
   * method
   */
  protected transform(transformation: ColorTransformations): this
  protected transform(transformation: ColorTransformations, text: string | number): string
  protected transform(transformation: ColorTransformations, text?: string | number): string | this {
    /**
     * Transform text. If the chain is defined, then transform using
     * the chain, otherwise use kluer directory
     */
    if (text !== undefined) {
      if (this.#chain) {
        return this.#dispose(this.#chain[transformation](text), () => {
          this.#chain = undefined
        })
      }
      return kleur[transformation](text)
    }

    /**
     * Apply transformation
     */
    if (this.#chain) {
      this.#chain = this.#chain[transformation]()
    } else {
      this.#chain = kleur[transformation]()
    }

    return this
  }
}
