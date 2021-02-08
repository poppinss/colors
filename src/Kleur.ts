/**
 * @poppinss/colors
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import kleur from 'kleur'
import { Colors } from './Base'

/**
 * Exposes the API to print colorful text. The reason we wrap `kleur`
 * is that, during tests we make use of a mock version of kleur
 * that makes the testing more reasonable.
 */
export class Kleur extends Colors {
  private chain?: kleur.Kleur

  /**
   * Perform the given transformation. The base class will
   * invoke this method
   */
  protected transform(transformation: string): this
  protected transform(transformation: string, text: string | number): string
  protected transform(transformation: string, text?: string | number): string | this {
    if (text !== undefined) {
      const output = (this.chain || kleur)[transformation](text)
      this.chain = undefined
      return output
    }

    if (this.chain) {
      this.chain = this.chain[transformation]()
    } else {
      this.chain = kleur[transformation]()
    }

    return this
  }
}
