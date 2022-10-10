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
 * Concrete implementation of the Colors class that returns
 * the value as it is.
 */
export class Silent extends Colors {
  /**
   * Perform the given transformation. The abstract Color class calls this
   * method
   */
  protected transform(transformation: ColorTransformations): this
  protected transform(transformation: ColorTransformations, text: string | number): string
  protected transform(_: ColorTransformations, text?: string | number): string | this {
    if (text !== undefined) {
      return String(text)
    }

    return this
  }
}
