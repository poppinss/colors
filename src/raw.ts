/**
 * @poppinss/colors
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Colors } from './base.js'
import { ColorTransformations } from './types.js'

/**
 * Concrete implementation of the Colors class that prefixes the
 * applied transformations to the final text as string.
 *
 * This class is meant to be used at the time of testing
 */
export class Raw extends Colors {
  #transformations: string[] = []

  #dispose<T>(value: T, callback: () => void) {
    callback()
    return value
  }

  /**
   * Perform the given transformation. The base class will
   * invoke this method
   */
  protected transform(transformation: ColorTransformations): this
  protected transform(transformation: ColorTransformations, text: string | number): string
  protected transform(transformation: ColorTransformations, text?: string | number): string | this {
    this.#transformations.push(transformation)

    if (text !== undefined) {
      const transformations = this.#transformations.concat([text as any]).join('(')
      const closingWrapping = new Array(this.#transformations.length + 1).join(')')

      return this.#dispose(`${transformations}${closingWrapping}`, () => {
        this.#transformations = []
      })
    }

    return this
  }
}
