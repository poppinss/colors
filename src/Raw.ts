/**
 * @poppinss/colors
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Colors } from './Base'

/**
 * Exposes the API to print raw text to the console. The API is
 * compatible with kleur.
 *
 * One must use it when they want to disable colors
 */
export class Raw extends Colors {
  /**
   * Perform the given transformation. The base class will
   * invoke this method
   */
  protected transform(transformation: string): this
  protected transform(transformation: string, text: string | number): string
  protected transform(_: string, text?: string | number): string | this {
    if (text !== undefined) {
      return String(text)
    }

    return this
  }
}
