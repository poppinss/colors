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
  private chain: kleur.Kleur = kleur.reset()

  /**
   * Perform the given transformation. The base class will
   * invoke this method
   */
  protected transform (transformation: string): this
  protected transform (transformation: string, text: string | number): string
  protected transform (transformation: string, text?: string | number): string | this {
    const output = this.chain[transformation](text)

    if (text !== undefined) {
      this.chain = kleur.reset()
      return output
    }

    return this
  }
}
