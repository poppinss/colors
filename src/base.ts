/**
 * @poppinss/colors
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Abstract implementation of the colors class.
 */
export abstract class Colors {
  protected abstract transform(transformation: string): this
  protected abstract transform(transformation: string, text: string | number): string
  protected abstract transform(transformation: string, text?: string | number): this | string

  black(): this
  black(text: string): string
  black(text?: string | number): this | string {
    return this.transform('black', text)
  }

  red(): this
  red(text: string): string
  red(text?: string | number): this | string {
    return this.transform('red', text)
  }

  green(): this
  green(text: string): string
  green(text?: string | number): this | string {
    return this.transform('green', text)
  }

  yellow(): this
  yellow(text: string): string
  yellow(text?: string | number): this | string {
    return this.transform('yellow', text)
  }

  blue(): this
  blue(text: string): string
  blue(text?: string | number): this | string {
    return this.transform('blue', text)
  }

  magenta(): this
  magenta(text: string): string
  magenta(text?: string | number): this | string {
    return this.transform('magenta', text)
  }

  cyan(): this
  cyan(text: string): string
  cyan(text?: string | number): this | string {
    return this.transform('cyan', text)
  }

  white(): this
  white(text: string): string
  white(text?: string | number): this | string {
    return this.transform('white', text)
  }

  gray(): this
  gray(text: string): string
  gray(text?: string | number): this | string {
    return this.transform('gray', text)
  }

  grey(): this
  grey(text: string): string
  grey(text?: string | number): this | string {
    return this.transform('grey', text)
  }

  bgBlack(): this
  bgBlack(text: string): string
  bgBlack(text?: string | number): this | string {
    return this.transform('bgBlack', text)
  }

  bgRed(): this
  bgRed(text: string): string
  bgRed(text?: string | number): this | string {
    return this.transform('bgRed', text)
  }

  bgGreen(): this
  bgGreen(text: string): string
  bgGreen(text?: string | number): this | string {
    return this.transform('bgGreen', text)
  }

  bgYellow(): this
  bgYellow(text: string): string
  bgYellow(text?: string | number): this | string {
    return this.transform('bgYellow', text)
  }

  bgBlue(): this
  bgBlue(text: string): string
  bgBlue(text?: string | number): this | string {
    return this.transform('bgBlue', text)
  }

  bgMagenta(): this
  bgMagenta(text: string): string
  bgMagenta(text?: string | number): this | string {
    return this.transform('bgMagenta', text)
  }

  bgCyan(): this
  bgCyan(text: string): string
  bgCyan(text?: string | number): this | string {
    return this.transform('bgCyan', text)
  }

  bgWhite(): this
  bgWhite(text: string): string
  bgWhite(text?: string | number): this | string {
    return this.transform('bgWhite', text)
  }

  reset(): this
  reset(text: string): string
  reset(text?: string | number): this | string {
    return this.transform('reset', text)
  }

  bold(): this
  bold(text: string): string
  bold(text?: string | number): this | string {
    return this.transform('bold', text)
  }

  dim(): this
  dim(text: string): string
  dim(text?: string | number): this | string {
    return this.transform('dim', text)
  }

  italic(): this
  italic(text: string): string
  italic(text?: string | number): this | string {
    return this.transform('italic', text)
  }

  underline(): this
  underline(text: string): string
  underline(text?: string | number): this | string {
    return this.transform('underline', text)
  }

  inverse(): this
  inverse(text: string): string
  inverse(text?: string | number): this | string {
    return this.transform('inverse', text)
  }

  hidden(): this
  hidden(text: string): string
  hidden(text?: string | number): this | string {
    return this.transform('hidden', text)
  }

  strikethrough(): this
  strikethrough(text: string): string
  strikethrough(text?: string | number): this | string {
    return this.transform('strikethrough', text)
  }
}
